import Product from "./product";
import Category from "./category";
import Order from "./order";
import User from "./user";
import Customer from "./customer";
import Vendor from "./vendor";
import Information from "./information";
import Article from "./article";
import Service from "./service";
import Dashboard from "./dashboard";
import Layout from "./layout";
import "@assets/css/main.css";
import "@assets/css/main.css.map"
import { BrowserRouter, Switch, Route, Redirect, useLocation, Link } from "react-router-dom"
import { useEffect, useState, useRef } from "react";
import React from "react";

const routes=[
    {
        path:"/admin/dashboard",
        name:"Dashboard",
        icon:"icon-dashboard",
        component:Dashboard,
        layout:"/admin",
    },
    {
        path:"#",
        name:"Sản phẩm",
        icon: "icon-tag",
        component:Product,
        layout:"/admin",
        child:[
            {
                path:"/admin/product",
                name:"Đang bán",
                icon: "icon-tag",
                component:Product,
                layout:"/admin",
            },
            {
                path:"/admin/order",
                name:"Chưa duyệt",
                icon: "icon-tag",
                component:Product,
                layout:"/admin",
            },
        ]
    },
    {
        path:"/admin/category",
        name:"Danh mục",
        icon:"icon-book",
        component:Category,
        layout:"/admin",
    },
    {
        path:"/admin/order",
        name:"Đơn hàng",
        icon:"icon-pencil",
        component:Order,
        layout:"/admin",
    },
    {
        path:"/admin/user",
        name:"Nhân viên",
        component:User,
        icon:"icon-user",
        layout:"/admin",
    },
    {
        path:"/admin/customer",
        name:"Khách hàng",
        icon:"icon-users",
        component:Customer,
        layout:"/admin",
    },
    {
        path:"/admin/vendor",
        name:"Nhà cung cấp",
        icon:"icon-pencil",
        component:Vendor,
        layout:"/admin",
    },
    {
        path:"/admin/information",
        name:"Thông tin",
        icon:"icon-settings",
        component:Information,
        layout:"/admin",
    },
    {
        path:"/admin/article",
        name:"Quản lý bài viết",
        icon:"icon-book",
        component:Article,
        layout:"/admin",
    },
    {
        path:"/admin/service",
        name:"Quản lý dịch vụ",
        icon:"icon-pencil",
        component:Service,
        layout:"/admin",
    },
]

const Admin =(props) =>{
    return(
        <>
        <div className="wrapper">
        <div className="container">
            <div className="dashboard">
            
            <BrowserRouter>
            <Layout
            routes={routes}
            ></Layout>
            <Switch>
                {routes.map( (item,key)=> {
                    return (item.child)? (
                        item?.child?.map( (childItem,key) => (
                            <Route
                                exact
                                path={childItem.path}
                                component={childItem.component}
                                key={key}
                            />
                        ))
                    ): (
                        <Route
                            exact
                            path={item.path}
                            component={item.component}
                            key={key}
                            />
                    )
                })}
                <Redirect from="*" to="/admin/dashboard" />
            </Switch>
            </BrowserRouter>
            </div>
        </div>
        </div>
        </>
    )
}

export default Admin;