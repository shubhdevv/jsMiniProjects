import React from "react";
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoNDxANDRIRDQ0NDg4NDQ0ODxANDQ0OFhEXFhURFRYYHTQsJCYxHRUfJz0tMTUrLi4uFx80RDM4NzQ1Ly0BCgoKDQ0NGg0NGisdHxkrKysrKystKysrKysrKysrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAAAwQIAQIFBgf/xABCEAABAwMBBAcEBwUHBQAAAAAAAQISAwQTEQUHc7IGISMxNXFyM2GxtCVRU3SBs8EVIkGSkxQXgpGh0dMkMkJDUv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/APqran+4z0N+CEmMmtWdmz0M5UJMZIqrjGMtYxjEFXGMZaxjGIKuMYy1jGMQVcYxlrGMYgq4xjLWMYxBVxjGWsYxiCrjGMtYxjEFXGMZaxjGIKuMYy1jGMQVcYxlrGMYgq4xjLWMYxBVxjGWsYxiCrjGMtYxjEFXGMZaxjGIKuMYy1jGMQVcYxlrGMYgq4xjLWMYxBVxnk7XZ++noT4qfQYzyNss7RvoTmUQe7as7NnoZyoSQJLRnZ0+GzlQlgUVsYxlmAgBWxjGWYCAFbGMZZgIAVsYxlmAgBWxjGWYCAFbGMZZgIAVsYxlmAgBWxjGWYCAFbGMZZgIAVsYxlmAgBWxjGWYCAFbGMZZgIAVsYxlmAgBWxjGWYCAFbGMZZgIAVsYxlmAgBWxjGWYCAFbGeNtpnaN9Ccyn0UDxNts7RvDTmcB71ozs6fDZyoSwO1ozs6fDZyoSwCIICBYgIAV4CBPARAggIE8RACCBzAmgIgQwECaIiBDA4Vunf1FhrOtPNDJG3NqXlavUfWq1KrnPequqPc//wAl6k17k9wGr0br3dfkIGRrfal5SVHUqtSk9O59J7qb0X3K1TXltq5jHL1q5jVVfrVUQDpAQJ4iIEEAqInf1efUfOb0rmvb7Hu6tF7qVRP7OxKlNysejX3FNjtFTu6nKn4mZal7XcurnK5frcquVfxUDX0DiBnnc9tW8/bFrQSq9KNZLhtWlN2OoiUHuTVvd3tRfwNGwAobRu6FrRqXFdyU6NFivqPXXRrU9yH5zcb59lNcqU7e4qNRVRHuWjT196JI9vfTNNj1I9zri2R/pya/FEM2gaU6J7xNlbUqpbMSpb3DkctOnWgqVdE1VGuaqprp/DqXqU+yiZX6BuqJtXZ+P/u/ttun+FaiI7/TU1dACGAgTQEAIInMCaAgBBE5gTQEAIInMCaAgBBE5gTQEAIInibdb2jeGnM4+igeFt5vaN4aczgPes29lT4bOVCaJxZt7Knw2cqE0QIoiJLERAiiIksRECKIiSxEQIoiJLERAiiIksRECNretPNDG20/bP8AU7mU2cxvWnmhjHantn+p3MoFQ2bZs7Knw6fKhjI2lZN7Knw6fKgHMBEliIgfD74G/Ql36rT5ukZgU1HvjT6DvPVZ/N0jLigfZ7m0+nbHzuflapp+JmHcz49Y+dz8rVNRxA8vbuxre/tqtpcIq0qzdFVuiOa5FRWvb70VEX8D8iu9w9aSrSvmKxVVUyW7muRP8LtPgfs219oULO3q3ddVSjb03VaitSTop9SH5hV36bNRdGWldzfrfVo03f5JqBd6C7pLbZdw29r11u69LXC1KeGlTcqaSVNVVV0VdO5OvuP0eB8V0N3obM2vcNs2U61vcPa9zEfB9N8U1VJNXq6k/iiH3cQIYCBNERAhgIE0RECGAgTREQIYCBNERAhgIE0RECGB4W3m9q3hpzOPo4ngbfb2reGnM4D3bJOyp8OnyoTaHSz9lT4dPlQmA6aDQ7gDpoNDuAOmg0O4A6aDQ7gDpoNDuAOrU608zFu1PbP9buZTaqGKtqe2f63cygVDZlntGzxU+2o+zZ/7af8A8p7zGiLp1nM1938qAbQ/aNl9tR/rU/8AcftGy+2o/wBan/uYvmvu/laJr7v5Wgad3wXts/Yl21lWk9yutNGtqMc5f+rpdyIpmFTslRydaaIvuRDoB9tuX8esfO5+VqmptDLW5bx+x87n5Wqao0A+W3mJ9DbR+6VP0Ml1O9fNfia23neC7R+6VP0Mk1O9fNfiB93uP8ctuHc/kONP6GYdxvjttw7n8h5qHQDpoNDvoNAOmg0O+gA6aDQ7gDpoNDuAOmg0O4A6aHgdIE7VvDTmcfRHgdIE7VvDTmcB7dl7Knw2cqE5DZeyp8NnKhOBwDkAcA5AHAOQBwNDkAcaDQ5AHBijantn+t3MptgxPtT2z/W7mUCofp9Lcb0ie1rkqWWjmo5Na1XXRU1+zPzA25YexpcKnyoBnT+4npH9pZf1q3/GP7iekf2ll/Wrf8ZpIAZa6SbpttbMtal9cvtXUaK00elKrUdU/fqNppoisT+Lk/ifBKar30eBXnqs/nKJlRQPttyvj9h53PytU1XoZU3K+P2HndfK1TVgHy28/wAF2j90qfoZHqd6+a/E1zvQ8F2j90qfoZGqd6+a/ED7zcZ47a8O5/IeakMubi/HbXh3P5DzUgHAOQBwDkAcA5AHAOQBwDkAcHz/AEh9q3hpzOPoT5/pB7VvDTmcB7NkvZU+GzlQm1K9mvZU+HT5UJtQOwOuo1A7A66jUDsDrqNQOwOuo1A7A66jUDuYn2p7Z/rdzKbVRTFW1PbP9buZQKhtuw9jS4VPlQxIbZsV7KlwqfKgFkHXUagfF76PArz1WfzlEyopqnfOv0Feeqz+comVlA+23K+P2HndfK1TVZlTcr4/Y+d18rVNU6gfM70PBdo/dKn6GR6nevmvxNb7zl+hdo/dKn6GSKnevmvxA+93GeO2vDufyHmo9TLe43x224dz+Q81FqB21Gp11GoHYHXUagdgddRqB2B11GoHYHXUagdj5/pB7VvDTmce9qeB0g9q3hpzOA9Wzd2VPhs5UJpFSzd2VPhs5UJpASyEiKQkBLISIpCQEshIikJASyEiKQkBLISIpCQEyOMh9IOjG2KFeq2raXDYveksFRzHJJetrkTRU96GtpCYGPrPoztiu5GUbS5qOcqIkbeqqa+9dNENhWyK2mxq97WMavmjURTiYkBLISIpCQHzO9SxubvY93QtmOrVnf2d7aVNJVHoy4pvdFP4rFqrp3rp9Zl+tsLabF0fbXLF17nW9Vq/6obGkJ+8DOW5ro7tVu2bW5fbV6dvRS4dUrVKT6VJqLbvYiScnWurk6k6/wANTSUiKZxIDxun1pXudlX1Cg1atarbVG06betz3d+ie/qMqXGwtpscqPtbli6r1Ot6rV7/AKlQ2LIT94Gd9yewdps2vRuKltXp0KVO4V9apRfTpN1pK1Ek5NNdVTq7zRsiKYkBLISIpCQEshIikJASyEiKQkBLISIpCQEshIikJASyPA6QO7VvDTmce1I8Db7u1bw05nAelZv7Onw2cqEsyjaP7Onw2cqEswLMxMrTEwqzMTK0znIEWJCZXyDIBYmJlfIMgFiYmV8gyAWJiZXyDIBYmJlfIMgFiYmV8gyAWJiZXyDIBYmJlfIMgFiYmV8gyAWJiZXyDIBYmJlfIMgFiYmV8gyAWJiZXyDIBYmJlfIMgFiYmV8gyA
                            // WJnhbed2reGnM49XIeHt1/aN4aczgLlrU7Onw2cqEuQ8+1q9mz0M5UJcoVbyDIVMoygW8gyFTKMoFvIMhUyjKBbyDIVMoygW8gyFTKMoFvIMhUyjKBbyDIVMoygW8gyFTKMoFvIMhUyjKBbyDIVMoygW8gyFTKMoFvIMhUyjKBbyDIVMoygW8gyFTKMoFvIMhUyjKBbyDIVMoygW8gyFTKMoFvIeLtt/aN4aczi/lPG21U7RvoTmUCe2q9mz0M+CEuUAgZRlAAZRlAAZRlAAZRlAAZRlAAZRlAAZRlAAZRlAAZRlAAZRlAAZRlAAZRlAAZRlAAZRlAAZRlAAZRlAAZRlAAZTyNr1P309CfFQAP/9k="
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                             <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                               <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-700" : "text-gray-700"} 
                                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent
                                    lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

 