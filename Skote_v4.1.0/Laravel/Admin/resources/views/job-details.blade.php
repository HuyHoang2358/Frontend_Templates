@extends('layouts.master')

@section('title') @lang('translation.Job_Details') @endsection

@section('content')

@component('components.breadcrumb')
@slot('li_1') Jobs @endslot
@slot('title') Job Details @endslot
@endcomponent

<div class="row">
    <div class="col-xl-3">
        <div class="card">
            <div class="card-body">
                <h5 class="fw-semibold">Overview</h5>

                <div class="table-responsive">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="col">Job Title</th>
                                <td scope="col">Magento Developer</td>
                            </tr>
                            <tr>
                                <th scope="row">Experience:</th>
                                <td>0-2 Years</td>
                            </tr>
                            <tr>
                                <th scope="row">Vacancy</th>
                                <td>12</td>
                            </tr>
                            <tr>
                                <th scope="row">Job Type</th>
                                <td><span class="badge badge-soft-success">Full Time</span></td>
                            </tr>
                            <tr>
                                <th scope="row">Status</th>
                                <td><span class="badge badge-soft-info">New</span></td>
                            </tr>
                            <tr>
                                <th scope="row">Posted Date</th>
                                <td>25 June, 2022</td>
                            </tr>
                            <tr>
                                <th scope="row">Close Date</th>
                                <td>13 April, 2022</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="hstack gap-2">
                    <button class="btn btn-soft-primary w-100">Apply Now</button>
                    <button class="btn btn-soft-danger w-100">Contact Us</button>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="text-center">
                    <img src="{{URL::asset('build/images/companies/adobe-photoshop.svg')}}" alt="" height="50" class="mx-auto d-block">
                    <h5 class="mt-3 mb-1">Themesbrand</h5>
                    <p class="text-muted mb-0">Since July 2017</p>
                </div>

                <ul class="list-unstyled mt-4">
                    <li>
                        <div class="d-flex">
                            <i class="bx bx-phone text-primary fs-4"></i>
                            <div class="ms-3">
                                <h6 class="fs-14 mb-2">Phone</h6>
                                <p class="text-muted fs-14 mb-0">+589 560 56555</p>
                            </div>
                        </div>
                    </li>
                    <li class="mt-3">
                        <div class="d-flex">
                            <i class="bx bx-mail-send text-primary fs-4"></i>
                            <div class="ms-3">
                                <h6 class="fs-14 mb-2">Email</h6>
                                <p class="text-muted fs-14 mb-0">themesbrand@gmail.com</p>
                            </div>
                        </div>
                    </li>
                    <li class="mt-3">
                        <div class="d-flex">
                            <i class="bx bx-globe text-primary fs-4"></i>
                            <div class="ms-3">
                                <h6 class="fs-14 mb-2">Website</h6>
                                <p class="text-muted fs-14 text-break mb-0">www.themesbrand.com</p>
                            </div>
                        </div>
                    </li>
                    <li class="mt-3">
                        <div class="d-flex">
                            <i class="bx bx-map text-primary fs-4"></i>
                            <div class="ms-3">
                                <h6 class="fs-14 mb-2">Location</h6>
                                <p class="text-muted fs-14 mb-0">Oakridge Lane Richardson.</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="mt-4">
                    <a href="#!" class="btn btn-soft-primary btn-hover w-100 rounded"><i class="mdi mdi-eye"></i> View Profile</a>
                </div>
            </div>
        </div>
    </div>
    <!--end col-->
    <div class="col-xl-9">
        <div class="card">
            <div class="card-body border-bottom">
                <div class="d-flex">
                    <img src="{{URL::asset('build/images/companies/wechat.svg')}}" alt="" height="50">
                    <div class="flex-grow-1 ms-3">
                        <h5 class="fw-semibold">Magento Developer</h5>
                        <ul class="list-unstyled hstack gap-2 mb-0">
                            <li>
                                <i class="bx bx-building-house"></i> <span class="text-muted">Themesbrand</span>
                            </li>
                            <li>
                                <i class="bx bx-map"></i> <span class="text-muted">California</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <h5 class="fw-semibold mb-3">Description</h5>
                <p class="text-muted">We are looking to hire a skilled Magento developer to build and maintain eCommerce websites for our clients. As a Magento developer, you will be responsible for liaising with the design team, setting up Magento 1x and 2x sites, building modules and customizing extensions, testing the performance of each site, and maintaining security and feature updates after the installation is complete.</p>

                <h5 class="fw-semibold mb-3">Responsibilities:</h5>
                <ul class="vstack gap-3">
                    <li>
                        Meeting with the design team to discuss the needs of the company.
                    </li>
                    <li>
                        Building and configuring Magento 1x and 2x eCommerce websites.
                    </li>
                    <li>
                        Coding of the Magento templates.
                    </li>
                    <li>
                        Developing Magento modules in PHP using best practices.
                    </li>
                    <li>
                        Designing themes and interfaces.
                    </li>
                    <li>
                        Setting performance tasks and goals.
                    </li>
                    <li>
                        Updating website features and security patches.
                    </li>
                </ul>

                <h5 class="fw-semibold mb-3">Requirements:</h5>
                <ul class="vstack gap-3">
                    <li>
                        Bachelor’s degree in computer science or related field.
                    </li>
                    <li>
                        Advanced knowledge of Magento, JavaScript, HTML, PHP, CSS, and MySQL.
                    </li>
                    <li>
                        Experience with complete eCommerce lifecycle development.
                    </li>
                    <li>
                        Understanding of modern UI/UX trends.
                    </li>
                    <li>
                        Knowledge of Google Tag Manager, SEO, Google Analytics, PPC, and A/B Testing.
                    </li>
                    <li>
                        Good working knowledge of Adobe Photoshop and Adobe Illustrator.
                    </li>
                    <li>
                        Strong attention to detail.
                    </li>
                    <li>
                        Ability to project-manage and work to strict deadlines.
                    </li>
                    <li>
                        Ability to work in a team environment.
                    </li>
                </ul>

                <h5 class="fw-semibold mb-3">Qualification:</h5>
                <ul class="vstack gap-3">
                    <li>
                        B.C.A / M.C.A under National University course complete.
                    </li>
                    <li>
                        3 or more years of professional design experience
                    </li>
                    <li>
                        Advanced degree or equivalent experience in graphic and web design
                    </li>
                </ul>

                <h5 class="fw-semibold mb-3">Skill & Experience:</h5>
                <ul class="vstack gap-3 mb-0">
                    <li>
                        Understanding of key Design Principal
                    </li>
                    <li>
                        Proficiency With HTML, CSS, Bootstrap
                    </li>
                    <li>
                        WordPress: 1 year (Required)
                    </li>
                    <li>
                        Experience designing and developing responsive design websites
                    </li>
                    <li>
                        web designing: 1 year (Preferred)
                    </li>
                </ul>

                <div class="mt-4">
                    <span class="badge badge-soft-warning">PHP</span>
                    <span class="badge badge-soft-warning">Magento</span>
                    <span class="badge badge-soft-warning">Marketing</span>
                    <span class="badge badge-soft-warning">WordPress</span>
                    <span class="badge badge-soft-warning">Bootstrap</span>
                </div>

                <div class="mt-4">
                    <ul class="list-inline mb-0">
                        <li class="list-inline-item mt-1">
                            Share this job:
                        </li>
                        <li class="list-inline-item mt-1">
                            <a href="javascript:void(0)" class="btn btn-outline-primary btn-hover"><i class="uil uil-facebook-f"></i> Facebook</a>
                        </li>
                        <li class="list-inline-item mt-1">
                            <a href="javascript:void(0)" class="btn btn-outline-danger btn-hover"><i class="uil uil-google"></i> Google+</a>
                        </li>
                        <li class="list-inline-item mt-1">
                            <a href="javascript:void(0)" class="btn btn-outline-success btn-hover"><i class="uil uil-linkedin-alt"></i> linkedin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--end col-->
</div>
<!--end row-->

@endsection
@section('script')
<script src="{{URL::asset('build/js/app.js')}}"></script>
@endsection
