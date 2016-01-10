import React from 'react'
import { Tree, TreeNode } from 'fit-tree'

export default class Demo extends React.Component {
    render() {
        return (
            <Tree defaultExpendAll>
                <TreeNode title="上古卷轴">
                    <TreeNode title="简介"/>
                    <TreeNode title="第一章">
                        <TreeNode title="残卷">
                            <TreeNode title="残卷1"/>
                            <TreeNode title="残卷2"/>
                        </TreeNode>
                        <TreeNode title="后记"/>
                    </TreeNode>
                </TreeNode>
            </Tree>
        )
    }
}