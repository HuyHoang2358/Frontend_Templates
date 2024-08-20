<!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">

    <div data-simplebar class="h-100">

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title" key="t-menu">@lang('translation.Menu')</li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bx-home-circle"></i>
                        <span key="t-dashboards">@lang('translation.Dashboards')</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="index" key="t-default">@lang('translation.Default')</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="waves-effect">
                    <span class="badge rounded-pill bg-danger float-end" key="t-hot">@lang('translation.hot')</span>
                        <i class="bx bx-layout"></i>
                        <span key="t-layouts">@lang('translation.Layouts')</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                        <li>
                            <a href="javascript: void(0);" class="has-arrow"
                                key="t-vertical">@lang('translation.Vertical')</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="layouts-light-sidebar"
                                        key="t-light-sidebar">@lang('translation.Light_Sidebar')</a></li>
                                <li><a href="layouts-compact-sidebar"
                                        key="t-compact-sidebar">@lang('translation.Compact_Sidebar')</a></li>
                                <li><a href="layouts-icon-sidebar"
                                        key="t-icon-sidebar">@lang('translation.Icon_Sidebar')</a></li>
                                <li><a href="layouts-boxed" key="t-boxed-width">@lang('translation.Boxed_Width')</a>
                                </li>
                                <li><a href="layouts-preloader" key="t-preloader">@lang('translation.Preloader')</a>
                                </li>
                                <li><a href="layouts-colored-sidebar"
                                        key="t-colored-sidebar">@lang('translation.Colored_Sidebar')</a></li>
                                <li><a href="layouts-scrollable" key="t-scrollable">@lang('translation.Scrollable')</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow"
                                key="t-horizontal">@lang('translation.Horizontal')</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="layouts-horizontal" key="t-horizontal">@lang('translation.Horizontal')</a>
                                </li>
                                <li><a href="layouts-hori-topbar-light"
                                        key="t-topbar-light">@lang('translation.Topbar_Light')</a></li>
                                <li><a href="layouts-hori-boxed-width"
                                        key="t-boxed-width">@lang('translation.Boxed_Width')</a></li>
                                <li><a href="layouts-hori-preloader"
                                        key="t-preloader">@lang('translation.Preloader')</a></li>
                                <li><a href="layouts-hori-colored-header"
                                        key="t-colored-topbar">@lang('translation.Colored_Header')</a></li>
                                <li><a href="layouts-hori-scrollable"
                                        key="t-scrollable">@lang('translation.Scrollable')</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="menu-title" key="t-backend">@lang('translation.backend')</li>
                <li>
                    <a href="yajra-datatable" class="waves-effect">
                        <i class="bx bx-list-ul"></i>
                        <span key="t-yajra-datatable">@lang('translation.yajra-datatable')</span>
                    </a>
                </li>

                <li class="menu-title" key="t-pages">@lang('translation.Pages')</li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bx-user-circle"></i>
                        <span key="t-authentication">@lang('translation.Authentication')</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="auth-login" key="t-login">@lang('translation.Login')</a></li>
                        <li><a href="auth-login-2" key="t-login-2">@lang('translation.Login') 2</a></li>
                        <li><a href="auth-register" key="t-register">@lang('translation.Register')</a></li>
                        <li><a href="auth-register-2" key="t-register-2">@lang('translation.Register') 2</a></li>
                        <li><a href="auth-recoverpw" key="t-recover-password">@lang('translation.Recover_Password')</a>
                        </li>
                        <li><a href="auth-recoverpw-2" key="t-recover-password-2">@lang('translation.Recover_Password')
                                2</a></li>
                        <li><a href="auth-lock-screen" key="t-lock-screen">@lang('translation.Lock_Screen')</a></li>
                        <li><a href="auth-lock-screen-2" key="t-lock-screen-2">@lang('translation.Lock_Screen') 2</a>
                        </li>
                        <li><a href="auth-confirm-mail" key="t-confirm-mail">@lang('translation.Confirm_Mail')</a></li>
                        <li><a href="auth-confirm-mail-2" key="t-confirm-mail-2">@lang('translation.Confirm_Mail') 2</a>
                        </li>
                        <li><a href="auth-email-verification"
                                key="t-email-verification">@lang('translation.Email_verification')</a></li>
                        <li><a href="auth-email-verification-2"
                                key="t-email-verification-2">@lang('translation.Email_verification') 2</a></li>
                        <li><a href="auth-two-step-verification"
                                key="t-two-step-verification">@lang('translation.Two_step_verification')</a></li>
                        <li><a href="auth-two-step-verification-2"
                                key="t-two-step-verification-2">@lang('translation.Two_step_verification') 2</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bx-file"></i>
                        <span key="t-utility">@lang('translation.Utility')</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="pages-starter" key="t-starter-page">@lang('translation.Starter_Page')</a></li>
                        <li><a href="pages-maintenance" key="t-maintenance">@lang('translation.Maintenance')</a></li>
                        <li><a href="pages-comingsoon" key="t-coming-soon">@lang('translation.Coming_Soon')</a></li>
                        <li><a href="pages-404" key="t-error-404">@lang('translation.Error_404')</a></li>
                        <li><a href="pages-500" key="t-error-500">@lang('translation.Error_500')</a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="bx bx-share-alt"></i>
                        <span key="t-multi-level">@lang('translation.Multi_Level')</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                        <li><a href="javascript: void(0);" key="t-level-1-1">@lang('translation.Level_1.1')</a></li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow"
                                key="t-level-1-2">@lang('translation.Level_1.2')</a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="javascript: void(0);" key="t-level-2-1">@lang('translation.Level_2.1')</a>
                                </li>
                                <li><a href="javascript: void(0);" key="t-level-2-2">@lang('translation.Level_2.2')</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
<!-- Left Sidebar End -->
