///**
// * Created by wangrui on 16/3/2.
// */
//import React from 'react'
//import { render, unmountComponentAtNode } from 'react-dom'
//import ReactTestUtils from 'react-addons-test-utils'
//import JsonTree from 'fit-json-tree'
//
//const jsonData = {
//    info: {
//        name: 'Li Lei',
//        boy: true,
//        deskmate: 'Han Mei Mei',
//        age: [21, 22],
//        sorty: [
//            {
//                dayOne: 'went to school'
//            },
//            {
//                dayTwo: 'play with eachother'
//            }
//        ]
//    }
//}
//
//describe('fit-json-tree', () => {
//    it('basic render', ()=> {
//        const container = document.createElement('div')
//        const component = (
//            <JsonTree json={jsonData}/>
//        )
//        render(component, container)
//
//        const tar = container.innerHTML.toString().indexOf("Li Lei")
//        expect(tar).not.toEqual(-1)
//    })
//
//    it('root render', ()=> {
//        let container = document.createElement('div')
//        const component = (
//            <JsonTree root={true}
//                      json={jsonData}/>
//        )
//        render(component, container)
//
//        const tar = container.innerHTML.toString().indexOf("root")
//        expect(tar).not.toEqual(-1)
//    })
//})
//
//
//
//
//
//
"use strict";