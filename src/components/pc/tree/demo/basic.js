import React from 'react'
import { Tree, TreeNode } from 'fit-tree'

export default class Demo extends React.Component {
    render() {
        return (
            <Tree defaultExpandAll={false}>
                <TreeNode title="parent 1">
                    <TreeNode title="leaf" />
                    <TreeNode title="parent 1-1">
                        <TreeNode title="parent 2-1">
                            <TreeNode title="leaf" />
                            <TreeNode title="leaf" />
                        </TreeNode>
                        <TreeNode title="leaf" />
                    </TreeNode>
                </TreeNode>
            </Tree>
        )
    }
}