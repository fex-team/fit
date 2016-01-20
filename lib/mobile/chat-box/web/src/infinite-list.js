import React from 'react'
import ReactDOM from 'react-dom'

const {findDOMNode} = ReactDOM

const isEqualSubset = (a, b) => {
    for (let key in a) if (a[key] !== b[key]) return false
    return true
}

const isEqual = (a, b) => isEqualSubset(a, b) && isEqualSubset(b, a)

const CLIENT_SIZE_KEYS = {x: 'clientWidth', y: 'clientHeight'}
const CLIENT_START_KEYS = {x: 'clientTop', y: 'clientLeft'}
const INNER_SIZE_KEYS = {x: 'innerWidth', y: 'innerHeight'}
const OFFSET_SIZE_KEYS = {x: 'offsetWidth', y: 'offsetHeight'}
const OFFSET_START_KEYS = {x: 'offsetLeft', y: 'offsetTop'}
const OVERFLOW_KEYS = {x: 'overflowX', y: 'overflowY'}
const SCROLL_KEYS = {x: 'scrollLeft', y: 'scrollTop'}
const SIZE_KEYS = {x: 'width', y: 'height'}

const NOOP = () => {
}

export default class ReactList extends React.Component {
    constructor(props) {
        super(props)
        const itemsPerRow = 1;
        const from = this.constrainFrom(this.props.initialIndex, this.props.length, itemsPerRow);
        const size = this.constrainSize(this.props.pageSize, this.props.length, this.props.pageSize, from);
        this.state = {from, size, itemsPerRow};
        this.cache = {};
    }

    componentWillReceiveProps(next) {
        let {itemsPerRow, from, size} = this.state;
        const {length, pageSize} = next;
        from = this.constrainFrom(from, length, itemsPerRow);
        size = this.constrainSize(size, length, pageSize, from);
        this.setState({from, size});
    }

    componentDidMount() {
        this.updateFrame = this.updateFrame.bind(this)
        window.addEventListener('resize', this.updateFrame)
        this.updateFrame(this.scrollTo.bind(this, this.props.initialIndex))
    }

    shouldComponentUpdate(props, state) {
        return !isEqual(props, this.props) || !isEqual(state, this.state)
    }

    componentDidUpdate() {
        this.updateFrame()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateFrame);
        this.scrollParent.removeEventListener('scroll', this.updateFrame);
    }

    getOffset(el) {
        const {axis} = this.props;
        let offset = el[CLIENT_START_KEYS[axis]] || 0;
        const offsetKey = OFFSET_START_KEYS[axis];
        do offset += el[offsetKey] || 0; while (el = el.offsetParent);
        return offset;
    }

    getScrollParent() {
        const {axis, scrollParentGetter} = this.props;
        if (scrollParentGetter) return scrollParentGetter();
        let el = findDOMNode(this);
        const overflowKey = OVERFLOW_KEYS[axis];
        while (el = el.parentElement) {
            switch (window.getComputedStyle(el)[overflowKey]) {
            case 'auto':
            case 'scroll':
            case 'overlay':
                return el;
            }
        }
        return window;
    }

    getScroll() {
        const {scrollParent} = this;
        const {axis} = this.props;
        const scrollKey = SCROLL_KEYS[axis];
        const scroll = scrollParent === window ?
            // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
            // always return document.documentElement[scrollKey] as 0, so take
            // whichever has a value.
        document.body[scrollKey] || document.documentElement[scrollKey] :
            scrollParent[scrollKey];
        const el = findDOMNode(this);
        return scroll - (this.getOffset(el) - this.getOffset(scrollParent));
    }

    setScroll(offset) {
        const {scrollParent} = this;
        if (scrollParent === window) {
            return window.scrollTo(0, this.getOffset(findDOMNode(this)) + offset);
        }
        scrollParent[SCROLL_KEYS[this.props.axis]] += offset - this.getScroll();
    }

    getViewportSize() {
        const {scrollParent} = this;
        const {axis} = this.props;
        return scrollParent === window ?
            window[INNER_SIZE_KEYS[axis]] :
            scrollParent[CLIENT_SIZE_KEYS[axis]];
    }

    getStartAndEnd(threshold = this.props.threshold) {
        const start = this.getScroll() - threshold;
        const end = start + this.getViewportSize() + (threshold * 2);
        return {start, end};
    }

    updateFrame(cb) {
        this.updateScrollParent()
        if (typeof cb != 'function') cb = NOOP
        return this.updateVariableFrame(cb)
    }

    updateScrollParent() {
        const prev = this.scrollParent
        this.scrollParent = this.getScrollParent()
        if (prev === this.scrollParent) return
        if (prev) prev.removeEventListener('scroll', this.updateFrame)
        this.scrollParent.addEventListener('scroll', this.updateFrame)
    }

    updateVariableFrame(cb) {
        if (!this.props.itemSizeGetter) this.cacheSizes();

        const {start, end} = this.getStartAndEnd();
        const {length, pageSize} = this.props;
        let space = 0;
        let from = 0;
        let size = 0;
        const maxFrom = length - 1;

        while (from < maxFrom) {
            const itemSize = this.getSizeOf(from);
            if (itemSize == null || space + itemSize > start) break;
            space += itemSize;
            ++from;
        }

        const maxSize = length - from;

        while (size < maxSize && space < end) {
            const itemSize = this.getSizeOf(from + size);
            if (itemSize == null) {
                size = Math.min(size + pageSize, maxSize);
                break;
            }
            space += itemSize;
            ++size;
        }

        this.setState({from, size}, cb);
    }

    getSpaceBefore(index, cache = {}) {
        if (cache[index] != null) return cache[index];

        // Try the static itemSize.
        const {itemSize, itemsPerRow} = this.state;
        if (itemSize) {
            return cache[index] = Math.ceil(index / itemsPerRow) * itemSize;
        }

        // Find the closest space to index there is a cached value for.
        let from = index;
        while (from > 0 && cache[--from] == null);

        // Finally, accumulate sizes of items from - index.
        let space = cache[from] || 0;
        for (let i = from; i < index; ++i) {
            cache[i] = space;
            const itemSize = this.getSizeOf(i);
            if (itemSize == null) break;
            space += itemSize;
        }

        return cache[index] = space;
    }

    cacheSizes() {
        const {cache} = this;
        const {from} = this.state;
        const itemEls = findDOMNode(this.items).children;
        const sizeKey = OFFSET_SIZE_KEYS[this.props.axis];
        for (let i = 0, l = itemEls.length; i < l; ++i) {
            cache[from + i] = itemEls[i][sizeKey];
        }
    }

    getSizeOf(index) {
        const {cache} = this
        const {itemSizeGetter} = this.props
        const {itemSize} = this.state

        // Try the static itemSize.
        if (itemSize) return itemSize

        // Try the itemSizeGetter.
        if (itemSizeGetter) return itemSizeGetter(index)

        // Try the cache.
        if (index in cache) return cache[index]
    }

    constrainFrom(from, length, itemsPerRow) {
        if (!from) return 0;
        return Math.max(
            Math.min(from, length - itemsPerRow - (length % itemsPerRow)),
            0
        );
    }

    constrainSize(size, length, pageSize, from) {
        return Math.min(Math.max(size, pageSize), length - from);
    }

    scrollTo(index) {
        if (index != null) this.setScroll(this.getSpaceBefore(index));
    }

    itemsRenderer(items, ref) {
        let style = {}
        if (this.props.direction === 'column-reverse') {
            style.display = 'flex'
            style.flexDirection = 'column-reverse'
        }
        return (
            <div style={style}
                 ref={ref}>{items}</div>
        )
    }

    renderItems() {
        const items = []
        for (let i = 0; i < this.state.size; ++i) {
            items.push(this.props.itemRenderer(this.state.from + i, i))
        }
        return this.itemsRenderer(items, c => this.items = c)
    }

    render() {
        const {axis, length, useTranslate3d} = this.props
        const {from} = this.state

        const items = this.renderItems()

        const style = {position: 'relative'}
        const cache = {}
        const size = this.getSpaceBefore(length, cache)
        if (size) {
            style[SIZE_KEYS[axis]] = size;
            if (axis === 'x') style.overflowX = 'hidden'
        }
        const offset = this.getSpaceBefore(from, cache)
        const x = axis === 'x' ? offset : 0
        const y = axis === 'y' ? offset : 0
        const transform =
            useTranslate3d ?
                `translate3d(${x}px, ${y}px, 0)` :
                `translate(${x}px, ${y}px)`
        const listStyle = {
            msTransform: transform,
            WebkitTransform: transform,
            transform
        }

        return <div {...{style}}>
            <div style={listStyle}>{items}</div>
        </div>
    }
}

ReactList.defaultProps = {
    axis: 'y',
    initialIndex: null,
    itemSizeGetter: null,
    itemRenderer: (index, key) => <div key={key}>{index}</div>,
    length: 0,
    pageSize: 10,
    scrollParentGetter: null,
    threshold: 100,
    useTranslate3d: false,
    direction: 'column'
}