@extends('layouts.master')

@section('title') @lang('translation.Jobs') @endsection

@section('content')

@component('components.breadcrumb')
@slot('li_1') Dashboards @endslot
@slot('title') Job @endslot
@endcomponent

<div class="row mb-4">
    <div class="col-lg-12">
        <div class="d-flex align-items-center">
            <img src="{{URL::asset('build/images/users/avatar-1.jpg')}}" alt="" class="avatar-sm rounded">
            <div class="ms-3 flex-grow-1">
                <h5 class="mb-2 card-title">Hello, Henry Franklin</h5>
                <p class="text-muted mb-0">Ready to jump back in?</p>
            </div>
            <div>
                <a href="javascript:void(0);" class="btn btn-primary"><i class="bx bx-plus align-middle"></i> Add New Jobs</a>
            </div>
        </div>
    </div>
    <!--end col-->
</div>
<!--end row-->

<div class="row">
    <div class="col-lg-3">
        <div class="card mini-stats-wid">
            <div class="card-body">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <p class="text-muted fw-medium">Job View</p>
                        <h4 class="mb-0">14,487</h4>
                    </div>

                    <div class="flex-shrink-0 align-self-center">
                        <div data-colors='["--bs-success", "--bs-transparent"]' dir="ltr" id="eathereum_sparkline_charts"></div>
                    </div>
                </div>
            </div>
            <div class="card-body border-top py-3">
                <p class="mb-0"> <span class="badge badge-soft-success me-1"><i class="bx bx-trending-up align-bottom me-1"></i> 18.89%</span> Increase last month</p>
            </div>
        </div>
    </div>
    <!--end col-->
    <div class="col-lg-3">
        <div class="card mini-stats-wid">
            <div class="card-body">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <p class="text-muted fw-medium">New Application</p>
                        <h4 class="mb-0">7,402</h4>
                    </div>

                    <div class="flex-shrink-0 align-self-center">
                        <div data-colors='["--bs-success", "--bs-transparent"]' dir="ltr" id="new_application_charts"></div>
                    </div>
                </div>
            </div>
            <div class="card-body border-top py-3">
                <p class="mb-0"> <span class="badge badge-soft-success me-1"><i class="bx bx-trending-up align-bottom me-1"></i> 24.07%</span> Increase last month</p>
            </div>
        </div>
    </div>
    <!--end col-->
    <div class="col-lg-3">
        <div class="card mini-stats-wid">
            <div class="card-body">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <p class="text-muted fw-medium">Total Approved</p>
                        <h4 class="mb-0">12,487</h4>
                    </div>

                    <div class="flex-shrink-0 align-self-center">
                        <div data-colors='["--bs-success", "--bs-transparent"]' dir="ltr" id="total_approved_charts"></div>
                    </div>
                </div>
            </div>
            <div class="card-body border-top py-3">
                <p class="mb-0"> <span class="badge badge-soft-success me-1"><i class="bx bx-trending-up align-bottom me-1"></i> 8.41%</span> Increase last month</p>
            </div>
        </div>
    </div>
    <!--end col-->
    <div class="col-lg-3">
        <div class="card mini-stats-wid">
            <div class="card-body">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <p class="text-muted fw-medium">Total Rejected</p>
                        <h4 class="mb-0">12,487</h4>
                    </div>

                    <div class="flex-shrink-0 align-self-center">
                        <div data-colors='["--bs-danger", "--bs-transparent"]' dir="ltr" id="total_rejected_charts"></div>
                    </div>
                </div>
            </div>
            <div class="card-body border-top py-3">
                <p class="mb-0"> <span class="badge badge-soft-danger me-1"><i class="bx bx-trending-down align-bottom me-1"></i> 20.63%</span> Decrease last month</p>
            </div>
        </div>
    </div>
    <!--end col-->
</div>
<!--end row-->

<div class="row">
    <div class="col-lg-8">
        <div class="card">
            <div class="card-body">
                <div class="d-sm-flex flex-wrap">
                    <h4 class="card-title mb-4">Statistics Applications</h4>
                    <div class="ms-auto">
                        <ul class="nav nav-pills">
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0);">Week</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="javascript:void(0);">Month</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="javascript:void(0);">Year</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div data-colors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-info"]' dir="ltr" id="chart"></div>
            </div>
        </div>
    </div>
    <!--end col-->
    <div class="col-lg-4">
        <div class="card">
            <div class="card-body">
                <div class="d-flex">
                    <div>
                        <h4 class="card-title mb-3">Invite your friends to Skote</h4>
                        <p class="text-muted">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally.</p>
                        <div>
                            <a href="javascript:void(0);" class="btn btn-primary btn-sm"><i class='bx bx-user-plus align-middle'></i> Invite Friends</a>
                        </div>
                    </div>
                    <div>
                        <img src="{{URL::asset('build/images/jobs.png')}}" alt="" height="130">
                    </div>
                </div>
            </div>
        </div>
        <!--end card-->
        <div class="card">
            <div class="card-body">
                <h4 class="card-title mb-3">Popular Candidate</h4>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="3000">
                            <div class="bg-light p-3 d-flex mb-3 rounded">
                                <img src="{{URL::asset('build/images/users/avatar-4.jpg')}}" alt="" class="avatar-sm rounded me-3">
                                <div class="flex-grow-1">
                                    <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Stephen Hadley</a> <span class="badge badge-soft-info">Freelance</span></h5>
                                    <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Germany</p>
                                </div>
                                <div>
                                    <div class="dropdown">
                                        <button class="btn btn-soft-primary" type="button" id="dropdownMenuButton11" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class='bx bx-dots-vertical-rounded'></i>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton11">
                                            <li><a class="dropdown-item" href="candidate-overview">View Details</a></li>
                                            <li><a class="dropdown-item" href="#">Download CV</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-light p-3 d-flex">
                                <img src="{{URL::asset('build/images/users/avatar-2.jpg')}}" alt="" class="avatar-sm rounded me-3">
                                <div class="flex-grow-1">
                                    <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Charles Brown</a> <span class="badge badge-soft-success">Full Time</span></h5>
                                    <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Cambodia</p>
                                </div>
                                <div>
                                    <div class="dropdown">
                                        <button class="btn btn-soft-primary" type="button" id="dropdownMenuButton12" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class='bx bx-dots-vertical-rounded'></i>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton12">
                                            <li><a class="dropdown-item" href="candidate-overview">View Details</a></li>
                                            <li><a class="dropdown-item" href="#">Download CV</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <div class="bg-light p-3 d-flex mb-3 rounded">
                                <img src="{{URL::asset('build/images/users/avatar-1.jpg')}}" alt="" class="avatar-sm rounded me-3">
                                <div class="flex-grow-1">
                                    <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Adam Miller</a> <span class="badge badge-soft-warning">Internship</span></h5>
                                    <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Australia</p>
                                </div>
                                <div>
                                    <div class="dropdown">
                                        <button class="btn btn-soft-primary" type="button" id="dropdownMenuButton13" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class='bx bx-dots-vertical-rounded'></i>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton13">
                                            <li><a class="dropdown-item" href="candidate-overview">View Details</a></li>
                                            <li><a class="dropdown-item" href="#">Download CV</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-light p-3 d-flex">
                                <img src="{{URL::asset('build/images/users/avatar-3.jpg')}}" alt="" class="avatar-sm rounded me-3">
                                <div class="flex-grow-1">
                                    <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Keith Gonzales</a> <span class="badge badge-soft-info">Freelance</span></h5>
                                    <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Belgium</p>
                                </div>
                                <div>
                                    <div class="dropdown">
                                        <button class="btn btn-soft-primary" type="button" id="dropdownMenuButton14" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class='bx bx-dots-vertical-rounded'></i>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton14">
                                            <li><a class="dropdown-item" href="candidate-overview">View Details</a></li>
                                            <li><a class="dropdown-item" href="#">Download CV</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                            <div class="bg-light p-3 d-flex mb-3 rounded">
                                <img src="{{URL::asset('build/images/users/avatar-4.jpg')}}" alt="" class="avatar-sm rounded me-3">
                                <div class="flex-grow-1">
                                    <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Bonnie Harney</a> <span class="badge badge-soft-success">Full Timer</span></h5>
                                    <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> Syria</p>
                                </div>
                                <div>
                                    <div class="dropdown">
                                        <button class="btn btn-soft-primary" type="button" id="dropdownMenuButton15" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class='bx bx-dots-vertical-rounded'></i>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton15">
                                            <li><a class="dropdown-item" href="candidate-overview">View Details</a></li>
                                            <li><a class="dropdown-item" href="#">Download CV</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-light p-3 d-flex">
                                <img src="{{URL::asset('build/images/users/avatar-2.jpg')}}" alt="" class="avatar-sm rounded me-3">
                                <div class="flex-grow-1">
                                    <h5 class="font-size-15 mb-2"><a href="candidate-overview" class="text-body">Dolores Minter</a> <span class="badge badge-soft-danger">Part Time</span></h5>
                                    <p class="mb-0 text-muted"><i class="bx bx-map text-body align-middle"></i> San Marino</p>
                                </div>
                                <div>
                                    <div class="dropdown">
                                        <button class="btn btn-soft-primary" type="button" id="dropdownMenuButton16" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class='bx bx-dots-vertical-rounded'></i>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton16">
                                            <li><a class="dropdown-item" href="candidate-overview">View Details</a></li>
                                            <li><a class="dropdown-item" href="#">Download CV</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end card-->
    </div>
    <!--end col-->
</div>
<!--end row-->

<div class="row">
    <div class="col-lg-12">
        <div class="d-flex">
            <h4 class="card-title mb-4 flex-grow-1">New Job Vacancy</h4>
            <div>
                <a href="job-list" class="btn btn-primary btn-sm">View All <i class="bx bx-right-arrow-alt"></i></a>
            </div>
        </div>
    </div>
    <!--end col-->
    <div class="col-lg-2">
        <div class="card">
            <div class="card-body p-4">
                <div class="text-center mb-3">
                    <img src="{{URL::asset('build/images/companies/airbnb.svg')}}" alt="" class="avatar-sm">
                    <a href="job-details" class="text-body">
                        <h5 class="mt-4 mb-2 font-size-15">Project Manager</h5>
                    </a>
                    <p class="mb-0 text-muted">Themesbrand</p>
                </div>

                <div class="d-flex">
                    <p class="mb-0 flex-grow-1 text-muted"><i class="bx bx-map text-body"></i> California</p>
                    <p class="mb-0 text-muted"><b>8</b> Vacancy</p>
                </div>
            </div>
        </div>
        <!--end card-->
    </div>
    <!--end col-->
    <div class="col-lg-2">
        <div class="card">
            <div class="card-body p-4">
                <div class="text-center mb-3">
                    <img src="{{URL::asset('build/images/companies/mailchimp.svg')}}" alt="" class="avatar-sm">
                    <a href="job-details" class="text-body">
                        <h5 class="mt-4 mb-2 font-size-15">Marketing Director</h5>
                    </a>
                    <p class="mb-0 text-muted">Themesbrand</p>
                </div>
                <div class="d-flex">
                    <p class="mb-0 flex-grow-1 text-muted"><i class="bx bx-map text-body"></i> Danemark</p>
                    <p class="mb-0 text-muted"><b>12</b> Vacancy</p>
                </div>
            </div>
        </div>
        <!--end card-->
    </div>
    <!--end col-->
    <div class="col-lg-2">
        <div class="card">
            <div class="card-body p-4">
                <div class="text-center mb-3">
                    <img src="{{URL::asset('build/images/companies/reddit.svg')}}" alt="" class="avatar-sm">
                    <a href="job-details" class="text-body">
                        <h5 class="mt-4 mb-2 font-size-15">Product Designer</h5>
                    </a>
                    <p class="mb-0 text-muted">Themesbrand</p>
                </div>
                <div class="d-flex">
                    <p class="mb-0 flex-grow-1 text-muted"><i class="bx bx-map text-body"></i> France</p>
                    <p class="mb-0 text-muted"><b>25</b> Vacancy</p>
                </div>
            </div>
        </div>
        <!--end card-->
    </div>
    <!--end col-->
    <div class="col-lg-2">
        <div class="card">
            <div class="card-body p-4">
                <div class="text-center mb-3">
                    <img src="{{URL::asset('build/images/companies/amazon.svg')}}" alt="" class="avatar-sm">
                    <a href="job-details" class="text-body">
                        <h5 class="mt-4 mb-2 font-size-15">Magento Developer</h5>
                    </a>
                    <p class="mb-0 text-muted">Themesbrand</p>
                </div>
                <div class="d-flex">
                    <p class="mb-0 flex-grow-1 text-muted"><i class="bx bx-map text-body"></i> Hong-Kong</p>
                    <p class="mb-0 text-muted"><b>8</b> Vacancy</p>
                </div>
            </div>
        </div>
        <!--end card-->
    </div>
    <!--end col-->
    <div class="col-lg-2">
        <div class="card">
            <div class="card-body p-4">
                <div class="text-center mb-3">
                    <img src="{{URL::asset('build/images/companies/adobe-photoshop.svg')}}" alt="" class="avatar-sm">
                    <a href="job-details" class="text-body">
                        <h5 class="mt-4 mb-2 font-size-15">Product Sales Specialist</h5>
                    </a>
                    <p class="mb-0 text-muted">Themesbrand</p>
                </div>
                <div class="d-flex">
                    <p class="mb-0 flex-grow-1 text-muted"><i class="bx bx-map text-body"></i> Louisiana</p>
                    <p class="mb-0 text-muted"><b>1</b> Vacancy</p>
                </div>
            </div>
        </div>
        <!--end card-->
    </div>
    <!--end col-->
    <div class="col-lg-2">
        <div class="card">
            <div class="card-body p-4">
                <div class="text-center mb-3">
                    <img src="{{URL::asset('build/images/companies/line.svg')}}" alt="" class="avatar-sm">
                    <a href="job-details" class="text-body">
                        <h5 class="mt-4 mb-2 font-size-15">Business Associate</h5>
                    </a>
                    <p class="mb-0 text-muted">Themesbrand</p>
                </div>
                <div class="d-flex">
                    <p class="mb-0 flex-grow-1 text-muted"><i class="bx bx-map text-body"></i> Phoenix</p>
                    <p class="mb-0 text-muted"><b>15</b> Vacancy</p>
                </div>
            </div>
        </div>
        <!--end card-->
    </div>
    <!--end col-->
</div>
<!--end row-->

<div class="row">
    <div class="col-lg-4">
        <div class="card">
            <div class="card-body">
                <div class="d-flex">
                    <h4 class="card-title">Applications Received Time</h4>
                    <div class="dropdown ms-auto">
                        <a class="text-muted font-size-16" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                            <i class="mdi mdi-dots-horizontal"></i>
                        </a>

                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>

                <div data-colors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-info"]' dir="ltr" id="application-received-time"></div>
            </div>
        </div>
        <!--end card-->
    </div>
    <!--end col-->
    <div class="col-lg-4">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title mb-4">Activity Feed</h4>
                <div data-simplebar style="max-height: 376px;">
                    <ul class="verti-timeline list-unstyled">
                        <li class="event-list">
                            <div class="event-timeline-dot">
                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                            </div>
                            <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                    <img src="{{URL::asset('build/images/users/avatar-5.jpg')}}" alt="" class="avatar-xs rounded-circle">
                                </div>
                                <div class="flex-grow-1">
                                    <div>
                                        <b>Charles Brown</b> applied for the job <b>Sr.frontend Developer</b>
                                        <p class="mb-0 text-muted">3 min ago</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="event-list">
                            <div class="event-timeline-dot">
                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                            </div>
                            <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                    <div class="avatar-xs">
                                        <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                            <i class='bx bx-revision font-size-14'></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-grow-1">
                                    <div>
                                        Your subscription expires today <a href="javascript: void(0);">Renew Now</a>
                                        <p class="text-muted mb-0">53 min ago</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="event-list">
                            <div class="event-timeline-dot">
                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                            </div>
                            <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                    <div class="avatar-xs">
                                        <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                            JA
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-grow-1">
                                    <div>
                                        <b>Jennifer Alexandar</b> created a new account as a <b>Freelance</b>.
                                        <p class="text-muted mb-0">1 hrs ago</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="event-list">
                            <div class="event-timeline-dot">
                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                            </div>
                            <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                    <img src="{{URL::asset('build/images/users/avatar-2.jpg')}}" alt="" class="avatar-xs rounded-circle">
                                </div>
                                <div class="flex-grow-1">
                                    <div>
                                        <b>Mark Ellison</b> applied for the job <b>Project Manager</b>
                                        <p class="mb-0 text-muted">3 hrs ago</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="event-list">
                            <div class="event-timeline-dot">
                                <i class="bx bx-right-arrow-circle font-size-18"></i>
                            </div>
                            <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                    <div class="avatar-xs">
                                        <div class="avatar-title bg-primary-subtle text-primary rounded-circle">
                                            AZ
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-grow-1">
                                    <div>
                                        <b>Acolin Zelton</b> created a new account as a <b>Freelance</b>.
                                        <p class="text-muted mb-0">1 hrs ago</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="text-center mt-4"><a href="javascript: void(0);" class="btn btn-primary waves-effect waves-light btn-sm">View More <i class="mdi mdi-arrow-right ms-1"></i></a></div>
                </div>
            </div>
        </div>
        <!--end card-->
    </div>
    <!--end col-->
    <div class="col-lg-4">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title mb-4">Recent Added Jobs</h4>
                <div data-simplebar style="max-height: 376px;">
                    <div class="vstack gap-4">
                        <div class="d-flex">
                            <img src="{{URL::asset('build/images/companies/wechat.svg')}}" alt="" height="40" class="rounded">
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-1 font-size-15"><a href="job-details" class="text-body">Marketing Director</a></h6>
                                <p class="text-muted mb-0">Themesbrand, USA - <b>53</b> sec ago</p>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-light" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="job-details">View Details</a></li>
                                    <li><a class="dropdown-item" href="#">Apply Now</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="d-flex">
                            <img src="{{URL::asset('build/images/companies/sass.svg')}}" alt="" height="40" class="rounded">
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-1 font-size-15"><a href="job-details" class="text-body">Frontend Developer</a></h6>
                                <p class="text-muted mb-0">Themesbrand, Hong-Kong - <b>47</b> min ago</p>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-light" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                    <li><a class="dropdown-item" href="job-details">View Details</a></li>
                                    <li><a class="dropdown-item" href="#">Apply Now</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="d-flex">
                            <img src="{{URL::asset('build/images/companies/adobe.svg')}}" alt="" height="40" class="rounded">
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-1 font-size-15"><a href="job-details" class="text-body">React Developer</a></h6>
                                <p class="text-muted mb-0">Creative Agency, Danemark - <b>1</b> hrs ago</p>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-light" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                    <li><a class="dropdown-item" href="job-details">View Details</a></li>
                                    <li><a class="dropdown-item" href="#">Apply Now</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-flex">
                            <img src="{{URL::asset('build/images/companies/airbnb.svg')}}" alt="" height="40" class="rounded">
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-1 font-size-15"><a href="job-details" class="text-body">NodeJs Developer</a></h6>
                                <p class="text-muted mb-0">Skote Themes, Louisiana - <b>2</b> hrs ago</p>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-light" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                                    <li><a class="dropdown-item" href="job-details">View Details</a></li>
                                    <li><a class="dropdown-item" href="#">Apply Now</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-flex">
                            <img src="{{URL::asset('build/images/companies/flutter.svg')}}" alt="" height="40" class="rounded">
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-1 font-size-15"><a href="job-details" class="text-body">Digital Marketing</a></h6>
                                <p class="text-muted mb-0">Web Technology pvt.Ltd, Danemark - <b>8</b> hrs ago</p>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-light" type="button" id="dropdownMenuButton5" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton5">
                                    <li><a class="dropdown-item" href="job-details">View Details</a></li>
                                    <li><a class="dropdown-item" href="#">Apply Now</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-flex">
                            <img src="{{URL::asset('build/images/companies/mailchimp.svg')}}" alt="" height="40" class="rounded">
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-1 font-size-15"><a href="job-details" class="text-body">Marketing Director</a></h6>
                                <p class="text-muted mb-0">Skote Technology, Dominica - <b>1</b> days ago</p>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-light" type="button" id="dropdownMenuButton6" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton6">
                                    <li><a class="dropdown-item" href="job-details">View Details</a></li>
                                    <li><a class="dropdown-item" href="#">Apply Now</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-flex">
                            <img src="{{URL::asset('build/images/companies/spotify.svg')}}" alt="" height="40" class="rounded">
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-1 font-size-15"><a href="job-details" class="text-body">Business Associate</a></h6>
                                <p class="text-muted mb-0">Themesbrand, Russia - <b>2</b> days ago</p>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-light" type="button" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton7">
                                    <li><a class="dropdown-item" href="job-details">View Details</a></li>
                                    <li><a class="dropdown-item" href="#">Apply Now</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-flex">
                            <img src="{{URL::asset('build/images/companies/reddit.svg')}}" alt="" height="40" class="rounded">
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-1 font-size-15"><a href="job-details" class="text-body">Backend Developer</a></h6>
                                <p class="text-muted mb-0">Adobe Agency, Malaysia - <b>3</b> days ago</p>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-light" type="button" id="dropdownMenuButton8" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bx bx-dots-vertical-rounded"></i>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton8">
                                    <li><a class="dropdown-item" href="job-details">View Details</a></li>
                                    <li><a class="dropdown-item" href="#">Apply Now</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--end card-->
    </div>
    <!--end col-->
</div>
<!--end row-->

@endsection
@section('script')
<!-- apexcharts -->
<script src="{{ URL::asset('build/libs/apexcharts/apexcharts.min.js') }}"></script>
<!-- crypto dash init js -->
<script src="{{ URL::asset('build/js/pages/dashboard-job.init.js') }}"></script>
<!-- app js -->
<script src="{{ URL::asset('build/js/app.js') }}"></script>
@endsection
