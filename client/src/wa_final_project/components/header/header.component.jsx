import * as React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from "../nav/nav.component.jsx";
import './header.component.scss';
export class Header extends React.Component{
    render(){
        return   <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 d-flex">
                                <Link to="/" className="d-flex" replace >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="29" viewBox="0 0 96 29">
                                        <g fill="none">
                                            <g fill="#8DD83D">
                                                <path d="M62.275 14.016c2.865-1.79 2.2-5.587.33-7.07-1.882-1.493-3.343-1.243-10.887-1.243a.58.58 0 0 0-.582.577v6.917c-2.18 0-2.282-.069-2.506.24-.63.864-.875 1.064-.672 1.458.21.407.351.315 3.189.315v7.557c0 .319.26.578.582.578 6.303.005 7.251.002 8.412-.17 2.762-.407 4.49-2.174 4.62-4.727.15-2.867-1.714-3.888-2.486-4.432zm-1.711-1.263c-1.214.549-1.464.443-7.199.44V7.78c.191-.03 4.05-.024 5.35.006a5.792 5.792 0 0 1 1.648.302c1.028.34 1.592 1.097 1.63 2.188.042 1.196-.439 2.03-1.43 2.477zm-7.2 8.531v-6.081c4.992 0 9.012-.56 9.195 2.752.073 1.332-.531 2.355-1.702 2.88-1.234.552-2.258.475-6.045.465-1.443-.003-1.279.004-1.449-.016zM82.04 11.564c-1.96-7.659-12.125-8.311-15.496-1.883-3.003 5.724-.058 14.475 7.838 14.028 6.467-.364 9.104-6.492 7.657-12.145zm-8.097 10.071c-6.435 0-7.704-8.054-4.86-11.84 2.901-3.863 9.594-3.151 10.867 2.666 1.002 4.578-1.299 9.174-6.007 9.174z"/>
                                                <path d="M89.737 14.113c5.99-8.057 5.829-7.64 5.607-8.076-.207-.405-.546-.317-1.688-.317-.406 0-.076-.295-5.243 6.656-5.15-6.92-4.83-6.643-5.237-6.643-1.147 0-1.484-.085-1.689.318-.1.194-.08.428.051.603l5.549 7.46c-6.636 8.963-6.414 8.461-6.191 8.898.206.403.543.316 1.691.316.185 0 .36-.087.47-.235l5.355-7.201 5.35 7.188c.225.3.445.235 1.64.235.22 0 .42-.123.52-.317.224-.44.417.03-6.185-8.885zM43.69 14.113c5.97-8.025 5.831-7.636 5.608-8.075a.583.583 0 0 0-.52-.317c-1.21 0-1.416-.061-1.636.235l-4.779 6.422C37.218 5.453 37.537 5.73 37.13 5.73c-1.155 0-1.478-.082-1.682.317a.574.574 0 0 0 .051.603l5.547 7.463c-6.64 8.96-6.417 8.458-6.194 8.895.205.403.54.317 1.694.317.406 0 .011.378 5.822-7.432 5.815 7.814 5.42 7.432 5.825 7.432h1.177a.578.578 0 0 0 .431-.966l-6.11-8.246zM8.785 2.26c1.528.185 3.41.863 5.595 2.016a.48.48 0 0 0 .45-.001c2.154-1.153 4.024-1.835 5.559-2.028.47-.059.573-.696.14-.895-3.701-1.705-7.951-1.816-11.888.012a.47.47 0 0 0 .144.895zM24.542 23.805c-.025-.182-.719-4.534-9.681-11.88a.479.479 0 0 0-.6-.005C6.367 18.169 3.554 24.146 4.844 25.247c3.048 2.608 5.965 3.72 9.753 3.72 4.116 0 6.725-1.37 9.601-3.58.555-.426.354-1.528.348-1.559l-.004-.023zM24.619 4.2c-1.606-.257-4.638 2.446-5.812 3.577a.469.469 0 0 0-.04.633c5.777 7.162 7.238 11.251 7.447 13.42a.478.478 0 0 0 .879.202 14.28 14.28 0 0 0 2.125-7.52c0-5.897-4.069-10.229-4.6-10.313zM10.402 7.777C7.036 4.535 5.355 4.185 4.788 4.185c-.07 0-.137.005-.197.014a.477.477 0 0 0-.26.13c-4.7 4.62-5.785 11.932-2.214 17.704a.477.477 0 0 0 .88-.202c.208-2.17 1.669-6.259 7.446-13.42a.469.469 0 0 0-.04-.634z"/>
                                            </g>
                                            <g fill="#79C422">
                                                <path d="M5.68 21.428c-.79 1.417-.971 2.239-.977 2.265-.071.427-.111 1.267.232 1.555 3.105 2.607 6.077 3.72 9.935 3.72.707 0 1.367-.043 1.995-.118-4.833-.59-8.946-3.435-11.185-7.422zM3.87 14.504c0-3.554 1.319-6.807 3.504-9.325-1.353-.86-2.14-.994-2.496-.994-.072 0-.14.004-.2.014a.49.49 0 0 0-.265.13C-.376 8.95-1.48 16.262 2.157 22.034c.09.141.247.225.413.225a.48.48 0 0 0 .482-.427c.092-.932.42-2.219 1.229-3.95a14.115 14.115 0 0 1-.412-3.377zM10.377 2.541A15.02 15.02 0 0 1 16.784.168c-2.967-.386-5.56.092-7.98 1.196a.469.469 0 0 0-.274.501c.081.495.468.31 1.847.676z"/>
                                            </g>
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                            <div className="col-md-10 d-flex justify-content-end">
                            <Nav/>
                            </div>
                        </div>
                    </div>
                </header>;
    };
};