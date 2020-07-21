import React, { Component } from 'react';
import classNames from 'classnames';
import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppConfig } from './AppConfig';
import { AppRightMenu } from './AppRightMenu';
import { Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { FormsDemo } from './components/FormsDemo';
import { SampleDemo } from './components/SampleDemo';
import { DataDemo } from './components/DataDemo';
import { PanelsDemo } from './components/PanelsDemo';
import { OverlaysDemo } from './components/OverlaysDemo';
import { MenusDemo } from './components/MenusDemo';
import { MessagesDemo } from './components/MessagesDemo';
import { ChartsDemo } from './components/ChartsDemo';
import { MiscDemo } from './components/MiscDemo';
import { EmptyPage } from './components/EmptyPage';
import { Documentation } from './components/Documentation';
import 'primereact/resources/primereact.min.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'slim',
            lightMenu: true,
            overlayMenuActive: false,
            staticMenuDesktopInactive: false,
            staticMenuMobileActive: false,
            isRTL: false,
            topbarColor: 'layout-topbar-blue',
            inlineUser: false,
            topbarMenuActive: false,
            activeTopbarItem: null,
            rightPanelMenuActive: null,
            inlineUserMenuActive: false,
            menuActive: false,
            themeColor: 'blue',
            configDialogActive: false
        };

        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
        this.onTopbarMenuButtonClick = this.onTopbarMenuButtonClick.bind(this);
        this.onTopbarItemClick = this.onTopbarItemClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.onRootMenuItemClick = this.onRootMenuItemClick.bind(this);
        this.onRightMenuButtonClick = this.onRightMenuButtonClick.bind(this);
        this.onRightMenuClick = this.onRightMenuClick.bind(this);
        this.onProfileMenuClick = this.onProfileMenuClick.bind(this);
        this.changeMenuMode = this.changeMenuMode.bind(this);
        this.changeMenuColor = this.changeMenuColor.bind(this);
        this.changeProfileMode = this.changeProfileMode.bind(this);
        this.changeOrientation = this.changeOrientation.bind(this);
        this.changeTopbarColor = this.changeTopbarColor.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
        this.onConfigButtonClick = this.onConfigButtonClick.bind(this);
        this.onConfigCloseClick = this.onConfigCloseClick.bind(this);
        this.onConfigClick = this.onConfigClick.bind(this);
        this.createMenu();
    }

    onDocumentClick(event) {
        if(!this.topbarItemClick) {
            this.setState({
                activeTopbarItem: null,
                topbarMenuActive: false
            });
        }

        if (!this.rightMenuClick) {
            this.setState({rightPanelMenuActive: false});
        }

        if (!this.configClick) {
            this.setState({configDialogActive: false});
        }

        if (!this.profileClick && this.isSlim() && !this.isMobile()) {
            this.setState({inlineUserMenuActive: false})
        }

        if(!this.menuClick) {
            if(this.isHorizontal() || this.isSlim()) {
                this.setState({
                    menuActive: false
                })
            }

            if (this.state.overlayMenuActive || this.state.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }

            this.setState({menuHoverActive: false});
            this.unblockBodyScroll();
        }

        this.topbarItemClick = false;
        this.menuClick = false;
        this.rightMenuClick = false;
        this.profileClick = false;
        this.configClick = false;
    }
    onMenuButtonClick(event) {
        this.menuClick = true;
        this.setState(({
            topbarMenuActive: false,
            rightPanelMenuActive: false
        }));

        if(this.isOverlay()) {
            this.setState({
                overlayMenuActive: !this.state.overlayMenuActive
            });
        }

        if(this.isDesktop())
            this.setState({staticMenuDesktopInactive: !this.state.staticMenuDesktopInactive});
        else {
            this.setState({staticMenuMobileActive: !this.state.staticMenuMobileActive});
            if (this.state.staticMenuMobileActive) {
                this.blockBodyScroll();
            } else {
                this.unblockBodyScroll();
            }
        }

        event.preventDefault();
    }

    onConfigButtonClick(event){
        this.configClick = true;
        this.setState({configDialogActive: !this.state.configDialogActive})
    }

    onConfigCloseClick(){
        this.setState({configDialogActive: false})
    }

    onConfigClick(){
        this.configClick = true;
    }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.setState({topbarMenuActive: !this.state.topbarMenuActive});
        this.hideOverlayMenu();
        event.preventDefault();
    }

    onTopbarItemClick(event) {
        this.topbarItemClick = true;

        if(this.state.activeTopbarItem === event.item)
            this.setState({activeTopbarItem: null});
        else
            this.setState({activeTopbarItem: event.item});

        event.originalEvent.preventDefault();
    }
    onMenuClick(event) {
        this.menuClick = true;
    }

    blockBodyScroll() {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        } else {
            document.body.className += ' blocked-scroll';
        }
    }

    unblockBodyScroll() {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\\\b)' +
                'blocked-scroll'.split(' ').join('|') + '(\\\\b|$)', 'gi'), ' ');
        }
    }
    onRightMenuButtonClick(event){
        this.rightMenuClick = true;
        this.setState({rightPanelMenuActive: !this.state.rightPanelMenuActive});

        this.hideOverlayMenu();

        event.preventDefault();
    }

    onRightMenuClick(event){
        this.rightMenuClick = true;
    }

    onProfileMenuClick(event) {
        this.profileClick = true;
        this.setState({inlineUserMenuActive: !this.state.inlineUserMenuActive})
    }

    hideOverlayMenu() {
        this.setState({
            overlayMenuActive: false,
            staticMenuMobileActive: false
        })
    }
    onMenuItemClick(event) {
        if(!event.item.items) {
            this.hideOverlayMenu();
        }
        if(!event.item.items && (this.isHorizontal() || this.isSlim())) {
            this.setState({
                menuActive: false
            })
        }
    }

    onRootMenuItemClick(event) {
        this.setState({
            menuActive: !this.state.menuActive
        });
    }

    isTablet() {
        const width = window.innerWidth;
        return width <= 1024 && width > 640;
    }

    isDesktop() {
        return window.innerWidth > 896;
    }

    isMobile() {
        return window.innerWidth <= 1025;
    }

    isStatic() {
        return this.state.layoutMode === 'static';
    }

    isOverlay() {
        return this.state.layoutMode === 'overlay';
    }

    isHorizontal() {
        return this.state.layoutMode === 'horizontal';
    }

    isSlim() {
        return this.state.layoutMode === 'slim';
    }

    changeMenuMode(event) {
        this.setState({
            layoutMode : event.menuMode,
            staticMenuDesktopInactive: false,
            overlayMenuActive: false
        });
        if(event.menuMode === 'slim' || event.menuMode === 'horizontal') {
            this.setState({
                inlineUser: false,
                inlineUserMenuActive: false
            })
        }
    }

    changeMenuColor(event) {
        this.setState({lightMenu : event.lightMenu})
    }

    changeProfileMode(event) {
        if(!event.inlineUser) {
            this.setState({
                inlineUser: event.inlineUser,
                inlineUserMenuActive: event.inlineUser
            })
        }
        else {
            if(!this.isHorizontal()) {
                this.setState({
                    inlineUser: event.inlineUser
                })
            }
        }
    }

    changeOrientation(event) {
        this.setState({isRTL: event.isRTL})
    }

    changeTopbarColor(event) {
        this.setState({topbarColor : event.topbarColor});
        const topbarLogoLink = document.getElementById('topbar-logo');
        topbarLogoLink.src = 'assets/layout/images/' + event.logo + '.svg';
    }

    changeTheme(event) {
        this.setState({themeColor: event.theme})
        this.changeStyleSheetUrl('layout-css',event.theme, 'layout');
        this.changeStyleSheetUrl('theme-css', event.theme, 'theme');
    }

    changeStyleSheetUrl(id, value, prefix) {
        let element = document.getElementById(id);
        let urlTokens = element.getAttribute('href').split('/');
        urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css';
        let newURL = urlTokens.join('/');

        this.replaceLink(element, newURL);
    }

    isIE() {
        return (MSIE|Trident|Edge)/i.test(window.navigator.userAgent)
    }

    replaceLink(linkElement, href) {
        if(this.isIE()){
            linkElement.setAttribute('href', href);
        }
        else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }

    createMenu() {
        this.menu = [

            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},
            {
                label: 'Layouts', icon: 'pi pi-fw pi-th-large',
                items: [
                    { label: 'Static', icon: 'pi pi-fw pi-bars', command: (event) => this.changeMenuMode({ originalEvent: event, menuMode: 'static' }) },
                    { label: 'Overlay', icon: 'pi pi-fw pi-bars', command: (event) => this.changeMenuMode({ originalEvent: event, menuMode: 'overlay' }) },
                    { label: 'Slim', icon: 'pi pi-fw pi-bars', command: (event) => this.changeMenuMode({ originalEvent: event, menuMode: 'slim' }) },
                    { label: 'Horizontal', icon: 'pi pi-fw pi-bars', command: (event) => this.changeMenuMode({ originalEvent: event, menuMode: 'horizontal' }) },
                    {
                        label: 'Orientation', icon: 'pi pi-fw pi-align-right',
                        items: [
                            {label: 'LTR', icon: 'pi pi-fw pi-align-left', command: (event) => this.changeOrientation({ originalEvent: event, isRTL: false }) },
                            {label: 'RTL', icon: 'pi pi-fw pi-align-right', command: (event) => this.changeOrientation({ originalEvent: event, isRTL: true })  }
                        ]
                    }
                ]
            },
            {
                label: 'Topbar Colors', icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Light', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-light', logo:'logo-roma'})
                    },
                    {
                        label: 'Dark', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-dark', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Blue', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-blue', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Green', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-green', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Orange', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-orange', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Magenta', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-magenta', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Blue Grey', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-bluegrey', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Deep Purple', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-deeppurple', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Brown', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-brown', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Lime', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-lime', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Rose', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-rose', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Cyan', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-cyan', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Teal', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-teal', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Deep Orange', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-deeporange', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Indigo', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-indigo', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Pink', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-pink', logo:'logo-roma-white'})
                    },
                    {
                        label: 'Purple', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTopbarColor({originalEvent: event, topbarColor:'layout-topbar-purple', logo:'logo-roma-white'})
                    }
                ]
            },
            {
                label: 'Menu Colors', icon: 'pi pi-fw pi-list',
                items: [
                    { label: 'Light', icon: 'pi pi-fw pi-circle-off', command: (event) => this.changeMenuColor({ originalEvent: event, lightMenu: true }) },
                    { label: 'Dark', icon: 'pi pi-fw pi-circle-on', command: (event) => this.changeMenuColor({ originalEvent: event, lightMenu: false }) }
                ]
            },
            {
                label: 'User Profile', icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Popup', icon: 'pi pi-fw pi-user', command: (event) => this.changeProfileMode({ originalEvent: event, inlineUser: false })},
                    { label: 'Inline', icon: 'pi pi-fw pi-user', command: (event) => this.changeProfileMode({ originalEvent: event, inlineUser: true })}
                ]
            },
            {
                label: 'Theme', icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Blue', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'blue'})
                    },
                    {
                        label: 'Green', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'green'})
                    },
                    {
                        label: 'Orange', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'orange'})
                    },
                    {
                        label: 'Magenta', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'magenta'})
                    },
                    {
                        label: 'Blue Grey', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'bluegrey'})
                    },
                    {
                        label: 'Deep Purple', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'deeppurple'})
                    },
                    {
                        label: 'Brown', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'brown'})
                    },
                    {
                        label: 'Lime', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'lime'})
                    },
                    {
                        label: 'Rose', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'rose'})
                    },
                    {
                        label: 'Cyan', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'cyan'})
                    },
                    {
                        label: 'Teal', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'teal'})
                    },
                    {
                        label: 'Deep-Orange', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'deeporange'})
                    },
                    {
                        label: 'Indigo', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'indigo'})
                    },
                    {
                        label: 'Pink', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'pink'})
                    },
                    {
                        label: 'Purple', icon: 'pi pi-fw pi-pencil',
                        command: (event) => this.changeTheme({originalEvent: event, theme:'purple'})
                    }
                ]
            },
            {
                label: 'Components', icon: 'pi pi-fw pi-star',
                items: [
                    { label: 'Sample Page', icon: 'pi pi-fw pi-th-large', to: '/sample'  },
                    { label: 'Forms', icon: 'pi pi-fw pi-file', to: '/forms' },
                    { label: 'Data', icon: 'pi pi-fw pi-table', to: '/data' },
                    { label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels' },
                    { label: 'Overlays', icon: 'pi pi-fw pi-clone', to: '/overlays' },
                    { label: 'Menus', icon: 'pi pi-fw pi-plus', to: '/menus' },
                    { label: 'Messages', icon: 'pi pi-fw pi-envelope', to: '/messages' },
                    { label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts' },
                    { label: 'Misc', icon: 'pi pi-fw pi-spinner', to: '/misc' }
                ]
            },
            {
                label: 'Pages', icon: 'pi pi-fw pi-copy',
                items: [
                    { label: 'Empty', icon: 'pi pi-fw pi-clone', to: '/empty'},
                    { label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login'},
                    { label: 'Landing', icon: 'pi pi-fw pi-globe', command: ()=> window.open('assets/pages/landing.html', '_blank')},
                    { label: 'Error', icon: 'pi pi-fw pi-exclamation-triangle', to: '/error'},
                    { label: '404', icon: 'pi pi-fw pi-times', to: '/404'},
                    {
                        label: 'Access Denied', icon: 'pi pi-fw pi-ban',
                        to: '/accessdenied'
                    }
                ]
            },
            {
                label: 'Hierarchy', icon: 'pi pi-fw pi-sitemap',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-sign-in' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-sign-in' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-sign-in' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-sign-in' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-sign-in' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-sign-in',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-sign-in' },
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Docs', icon: 'pi pi-fw pi-file', to: '/documentation'
            },
            {
                label: 'Buy Now', icon: 'pi pi-fw pi-money-bill',command: ()=> window.open('https://www.primefaces.org/store', '_blank')
            }
        ];
    }

    render() {
        const layoutClassName = classNames('layout-wrapper', {
            'layout-horizontal': this.state.layoutMode === 'horizontal',
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-slim': this.state.layoutMode === 'slim',
            'layout-menu-light': this.state.lightMenu === true,
            'layout-menu-dark': this.state.lightMenu === false,
            'layout-overlay-active': this.state.overlayMenuActive,
            'layout-mobile-active': this.state.staticMenuMobileActive,
            'layout-static-inactive': this.state.staticMenuDesktopInactive,
            'layout-rtl': this.state.isRTL
        }, this.state.topbarColor);

        return (
            <div className={layoutClassName} onClick={this.onDocumentClick}>
                <AppTopbar topbarMenuActive={this.state.topbarMenuActive} activeTopbarItem={this.state.activeTopbarItem} inlineUser={this.state.inlineUser}
                           onRightMenuButtonClick={this.onRightMenuButtonClick} onMenuButtonClick={this.onMenuButtonClick}
                           onTopbarMenuButtonClick={this.onTopbarMenuButtonClick} onTopbarItemClick={this.onTopbarItemClick} />

                <div className='layout-menu-container' onClick={this.onMenuClick}>
                    <div className="menu-scroll-content">
                        {
                            this.state.inlineUser && <div className="layout-profile">
                                <button className="p-link layout-profile-button" onClick={this.onProfileMenuClick}>
                                    <img src="assets/layout/images/avatar.png" alt="roma-layout"/>
                                    <span className="layout-profile-userinfo">
                                        <span className="layout-profile-name">Arlene Welch</span>
                                        <span className="layout-profile-role">Design Ops</span>
                                    </span>
                                </button>
                                <ul className={classNames("layout-profile-menu", {'profile-menu-active':this.state.inlineUserMenuActive})}>
                                    <li>
                                        <button className="p-link">
                                            <i className="pi pi-fw pi-user"></i><span>Profile</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="p-link">
                                            <i className="pi pi-fw pi-cog"></i><span>Settings</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="p-link">
                                            <i className="pi pi-fw pi-envelope"></i><span>Messages</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="p-link">
                                            <i className="pi pi-fw pi-bell"></i><span>Notifications</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        }
                        <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} onRootMenuItemClick={this.onRootMenuItemClick}
                                layoutMode={this.state.layoutMode} active={this.state.menuActive} />
                    </div>
                </div>

                <AppRightMenu rightPanelMenuActive={this.state.rightPanelMenuActive} onRightMenuClick={this.onRightMenuClick}></AppRightMenu>

                <div className="layout-main">
                    <div className="layout-content">
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/forms" component={FormsDemo} />
                        <Route path="/sample" component={SampleDemo} />
                        <Route path="/data" component={DataDemo} />
                        <Route path="/panels" component={PanelsDemo} />
                        <Route path="/overlays" component={OverlaysDemo} />
                        <Route path="/menus" component={MenusDemo} />
                        <Route path="/messages" component={MessagesDemo} />
                        <Route path="/charts" component={ChartsDemo} />
                        <Route path="/misc" component={MiscDemo} />
                        <Route path="/empty" component={EmptyPage} />
                        <Route path="/documentation" component={Documentation} />
                    </div>

                    <AppConfig layoutMode={this.state.layoutMode} lightMenu={this.state.lightMenu} inlineUser={this.state.inlineUser} isRTL={this.state.isRTL}
                               themeColor={this.state.themeColor} topbarColor={this.state.topbarColor} changeMenuMode={this.changeMenuMode} changeMenuColor={this.changeMenuColor}
                               changeProfileMode={this.changeProfileMode} changeOrientation={this.changeOrientation} changeTopbarColor={this.changeTopbarColor} changeTheme={this.changeTheme}
                               onConfigButtonClick={this.onConfigButtonClick} onConfigCloseClick={this.onConfigCloseClick} onConfigClick={this.onConfigClick} configDialogActive={this.state.configDialogActive}/>
                </div>

                <AppFooter />

                <div className="layout-content-mask"></div>
            </div>
        );
    }
}

export default App;
