@extends('layouts.master')

@section('title')
    @lang('translation.Candidate') @lang('translation.List')
@endsection

@section('css')
    <link rel="stylesheet" type="text/css"
        href="{{ URL::asset('build/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css') }}">
@endsection

@section('content')
    @component('components.breadcrumb')
        @slot('li_1')
            Jobs
        @endslot
        @slot('title')
            Candidate List
        @endslot
    @endcomponent

    <div class="row">
        <div class="col-lg-12">
            <div class="card job-filter">
                <div class="card-body p-3">
                    <form action="javascript:void(0);">
                        <div class="row g-3">
                            <div class="col-xxl-4 col-lg-4">
                                <div class="position-relative">
                                    <input type="text" class="form-control" id="searchList" autocomplete="off"
                                        placeholder="Search your candidate">
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-xxl-2 col-lg-4">
                                <div class="position-relative">
                                    <input type="text" class="form-control" id="locationInput" autocomplete="off"
                                        placeholder="San Francisco, LA">
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-xxl-2 col-lg-4">
                                <div class="position-relative">
                                    <select class="form-select" id="idType" aria-label="Default select example">
                                        <option value="all">Select for</option>
                                        <option value="Freelance">Freelance</option>
                                        <option value="Full Time">Full Time</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="Internship">Internship</option>
                                    </select>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-xxl-2 col-lg-6">
                                <div class="position-relative">
                                    <div id="datepicker1">
                                        <input type="text" class="form-control" placeholder="Select date"
                                            data-date-format="dd M, yyyy" data-date-container='#datepicker1'
                                            data-date-autoclose="true" data-provide="datepicker">
                                    </div><!-- input-group -->
                                </div>
                            </div>
                            <!--end col-->

                            <div class="col-xxl-2 col-lg-6">
                                <div class="position-relative h-100 hstack gap-3">
                                    <button type="submit" class="btn btn-primary h-100 w-100" onclick="filterData();"><i
                                            class="bx bx-search-alt align-middle"></i> Find Jobs</button>
                                    <a href="#collapseExample" data-bs-toggle="collapse"
                                        class="btn btn-secondary h-100 w-100"><i class="bx bx-filter-alt align-middle"></i>
                                        Advance</a>
                                </div>
                            </div>
                            <!--end col-->
                            <div class="collapse" id="collapseExample">
                                <div class="pt-4">
                                    <div class="row g-3">
                                        <div class="col-xxl-4 col-lg-6">
                                            <div>
                                                <label for="experience" class="form-label">Experience</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1"
                                                    value="option1">
                                                <label class="form-check-label" for="inlineCheckbox1">All</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2"
                                                    value="option1">
                                                <label class="form-check-label" for="inlineCheckbox2">Fresher</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox3"
                                                    value="option2">
                                                <label class="form-check-label" for="inlineCheckbox3">1-2</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox4"
                                                    value="option2">
                                                <label class="form-check-label" for="inlineCheckbox4">2-3</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox5"
                                                    value="option3">
                                                <label class="form-check-label" for="inlineCheckbox5">4+</label>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-lg-6">
                                            <div>
                                                <label for="jobType" class="form-label">Job Type</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox6"
                                                    value="option3">
                                                <label class="form-check-label" for="inlineCheckbox6">Full Time</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox7"
                                                    value="option3">
                                                <label class="form-check-label" for="inlineCheckbox7">Part Time</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox8"
                                                    value="option3">
                                                <label class="form-check-label" for="inlineCheckbox8">Freelance</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="inlineCheckbox9"
                                                    value="option3">
                                                <label class="form-check-label" for="inlineCheckbox9">Internship</label>
                                            </div>
                                        </div>
                                        <div class="col-xxl-4 col-lg-4">
                                            <div class="position-relative">
                                                <label for="qualificationInput" class="form-label">Qualification</label>
                                                <input type="text" class="form-control" id="qualificationInput"
                                                    autocomplete="off" placeholder="Qualification">
                                                <i class="ri-government-line filter-icon"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--end row-->
                    </form>
                </div>
            </div>
        </div>
        <!--end col-->
    </div>
    <!--end row-->

    <div class="row" id="candidate-list">
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-start mb-3">
                        <div class="flex-grow-1">
                            <span class="badge badge-soft-success">Full Time</span>
                        </div>
                        <button type="button" class="btn btn-light btn-sm like-btn" data-bs-toggle="button"><i
                                class="bx bx-heart"></i></button>
                    </div>
                    <div class="text-center mb-3">
                        <img src="{{ URL::asset('build/images/users/avatar-1.jpg') }}" alt="" class="avatar-sm rounded-circle" />
                        <h6 class="font-size-15 mt-3 mb-1">Steven Franklin</h6>
                        <p class="mb-0 text-muted">UI/UX Designer</p>
                    </div>
                    <div class="d-flex mb-3 justify-content-center gap-2 text-muted">
                        <div>
                            <i class='bx bx-map align-middle text-primary'></i> Louisiana
                        </div>
                        <p class="mb-0 text-center"><i class='bx bx-money align-middle text-primary'></i> $38 / hrs</p>
                    </div>
                    <div class="hstack gap-2 justify-content-center">
                        <span class="badge badge-soft-secondary">Bootstrap</span>
                        <span class="badge badge-soft-secondary">HTML</span>
                        <span class="badge badge-soft-secondary">CSS</span>
                    </div>

                    <div class="mt-4 pt-1">
                        <a href="candidate-overview" class="btn btn-soft-primary d-block">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-start mb-3">
                        <div class="flex-grow-1">
                            <span class="badge badge-soft-info">Freelance</span>
                        </div>
                        <button type="button" class="btn btn-light btn-sm like-btn" data-bs-toggle="button"><i
                                class="bx bx-heart"></i></button>
                    </div>
                    <div class="text-center mb-3">
                        <img src="{{ URL::asset('build/images/users/avatar-2.jpg') }}" alt="" class="avatar-sm rounded-circle" />
                        <h6 class="font-size-15 mt-3 mb-1">Dolores Minter</h6>
                        <p class="mb-0 text-muted">Assistant / Shope Keeper</p>
                    </div>
                    <div class="d-flex mb-3 justify-content-center gap-2 text-muted">
                        <div>
                            <i class='bx bx-map align-middle text-primary'></i> Hong-Kong
                        </div>
                        <p class="mb-0 text-center"><i class='bx bx-money align-middle text-primary'></i> $25 / hrs</p>
                    </div>
                    <div class="hstack gap-2 justify-content-center">
                        <span class="badge badge-soft-secondary">Shope</span>
                        <span class="badge badge-soft-secondary">Assistant</span>
                    </div>

                    <div class="mt-4 pt-1">
                        <a href="candidate-overview" class="btn btn-soft-primary d-block">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-start mb-3">
                        <div class="flex-grow-1">
                            <span class="badge badge-soft-danger">Part Time</span>
                        </div>
                        <button type="button" class="btn btn-light btn-sm like-btn" data-bs-toggle="button"><i
                                class="bx bx-heart"></i></button>
                    </div>
                    <div class="text-center mb-3">
                        <img src="{{ URL::asset('build/images/users/avatar-3.jpg') }}" alt="" class="avatar-sm rounded-circle" />
                        <h6 class="font-size-15 mt-3 mb-1">Charles Brown</h6>
                        <p class="mb-0 text-muted">Web Designer</p>
                    </div>
                    <div class="d-flex mb-3 justify-content-center gap-2 text-muted">
                        <div>
                            <i class='bx bx-map align-middle text-primary'></i> Finlande
                        </div>
                        <p class="mb-0 text-center"><i class='bx bx-money align-middle text-primary'></i> $24 / hrs</p>
                    </div>
                    <div class="hstack gap-2 justify-content-center">
                        <span class="badge badge-soft-secondary">Bootstrap</span>
                        <span class="badge badge-soft-secondary">HTML</span>
                        <span class="badge badge-soft-secondary">SASS</span>
                    </div>

                    <div class="mt-4 pt-1">
                        <a href="candidate-overview" class="btn btn-soft-primary d-block">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-start mb-3">
                        <div class="flex-grow-1">
                            <span class="badge badge-soft-warning">Internship</span>
                        </div>
                        <button type="button" class="btn btn-light btn-sm like-btn" data-bs-toggle="button"><i
                                class="bx bx-heart"></i></button>
                    </div>
                    <div class="text-center mb-3">
                        <img src="{{ URL::asset('build/images/users/avatar-4.jpg') }}" alt="" class="avatar-sm rounded-circle" />
                        <h6 class="font-size-15 mt-3 mb-1">Bonnie Harney</h6>
                        <p class="mb-0 text-muted">Web Developer</p>
                    </div>
                    <div class="d-flex mb-3 justify-content-center gap-2 text-muted">
                        <div>
                            <i class='bx bx-map align-middle text-primary'></i> France
                        </div>
                        <p class="mb-0 text-center"><i class='bx bx-money align-middle text-primary'></i> $47 / hrs</p>
                    </div>
                    <div class="hstack gap-2 justify-content-center">
                        <span class="badge badge-soft-secondary">MYSQL</span>
                        <span class="badge badge-soft-secondary">PHP</span>
                        <span class="badge badge-soft-secondary">Laravel</span>
                    </div>

                    <div class="mt-4 pt-1">
                        <a href="candidate-overview" class="btn btn-soft-primary d-block">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-start mb-3">
                        <div class="flex-grow-1">
                            <span class="badge badge-soft-warning">Internship</span>
                        </div>
                        <button type="button" class="btn btn-light btn-sm like-btn" data-bs-toggle="button"><i
                                class="bx bx-heart"></i></button>
                    </div>
                    <div class="text-center mb-3">
                        <img src="{{ URL::asset('build/images/users/avatar-5.jpg') }}" alt="" class="avatar-sm rounded-circle" />
                        <h6 class="font-size-15 mt-3 mb-1">Stephen Hadley</h6>
                        <p class="mb-0 text-muted">Graphic Designer</p>
                    </div>
                    <div class="d-flex mb-3 justify-content-center gap-2 text-muted">
                        <div>
                            <i class='bx bx-map align-middle text-primary'></i> Danemark
                        </div>
                        <p class="mb-0 text-center"><i class='bx bx-money align-middle text-primary'></i> $83 / hrs</p>
                    </div>
                    <div class="hstack gap-2 justify-content-center">
                        <span class="badge badge-soft-secondary">Figma</span>
                        <span class="badge badge-soft-secondary">Adobe XD</span>
                        <span class="badge badge-soft-secondary">Sketch</span>
                    </div>

                    <div class="mt-4 pt-1">
                        <a href="candidate-overview" class="btn btn-soft-primary d-block">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-start mb-3">
                        <div class="flex-grow-1">
                            <span class="badge badge-soft-warning">Internship</span>
                        </div>
                        <button type="button" class="btn btn-light btn-sm like-btn" data-bs-toggle="button"><i
                                class="bx bx-heart"></i></button>
                    </div>
                    <div class="text-center mb-3">
                        <img src="{{ URL::asset('build/images/users/avatar-6.jpg') }}" alt="" class="avatar-sm rounded-circle" />
                        <h6 class="font-size-15 mt-3 mb-1">Henry Wells</h6>
                        <p class="mb-0 text-muted">Executive, HR Operations</p>
                    </div>
                    <div class="d-flex mb-3 justify-content-center gap-2 text-muted">
                        <div>
                            <i class='bx bx-map align-middle text-primary'></i> Danemark
                        </div>
                        <p class="mb-0 text-center"><i class='bx bx-money align-middle text-primary'></i> $65 / hrs</p>
                    </div>
                    <div class="hstack gap-2 justify-content-center">
                        <span class="badge badge-soft-secondary">HR</span>
                        <span class="badge badge-soft-secondary">Executive</span>
                        <span class="badge badge-soft-secondary">Professional</span>
                    </div>

                    <div class="mt-4 pt-1">
                        <a href="candidate-overview" class="btn btn-soft-primary d-block">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-start mb-3">
                        <div class="flex-grow-1">
                            <span class="badge badge-soft-success">Full Time</span>
                        </div>
                        <button type="button" class="btn btn-light btn-sm like-btn" data-bs-toggle="button"><i
                                class="bx bx-heart"></i></button>
                    </div>
                    <div class="text-center mb-3">
                        <img src="{{ URL::asset('build/images/users/avatar-7.jpg') }}" alt="" class="avatar-sm rounded-circle" />
                        <h6 class="font-size-15 mt-3 mb-1">Adam Miller</h6>
                        <p class="mb-0 text-muted">Education Training</p>
                    </div>
                    <div class="d-flex mb-3 justify-content-center gap-2 text-muted">
                        <div>
                            <i class='bx bx-map align-middle text-primary'></i> Colombie
                        </div>
                        <p class="mb-0 text-center"><i class='bx bx-money align-middle text-primary'></i> $40 / hrs</p>
                    </div>
                    <div class="hstack gap-2 justify-content-center">
                        <span class="badge badge-soft-secondary">Teaching</span>
                        <span class="badge badge-soft-secondary">React</span>
                        <span class="badge badge-soft-secondary">Training</span>
                    </div>

                    <div class="mt-4 pt-1">
                        <a href="candidate-overview" class="btn btn-soft-primary d-block">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-start mb-3">
                        <div class="flex-grow-1">
                            <span class="badge badge-soft-info">Freelance</span>
                        </div>
                        <button type="button" class="btn btn-light btn-sm like-btn" data-bs-toggle="button"><i
                                class="bx bx-heart"></i></button>
                    </div>
                    <div class="text-center mb-3">
                        <img src="{{ URL::asset('build/images/users/avatar-8.jpg') }}" alt="" class="avatar-sm rounded-circle" />
                        <h6 class="font-size-15 mt-3 mb-1">Keith Gonzales</h6>
                        <p class="mb-0 text-muted">Product Manager</p>
                    </div>
                    <div class="d-flex mb-3 justify-content-center gap-2 text-muted">
                        <div>
                            <i class='bx bx-map align-middle text-primary'></i> Brazil
                        </div>
                        <p class="mb-0 text-center"><i class='bx bx-money align-middle text-primary'></i> $50 / hrs</p>
                    </div>
                    <div class="hstack gap-2 justify-content-center">
                        <span class="badge badge-soft-secondary">Manager</span>
                        <span class="badge badge-soft-secondary">Business</span>
                        <span class="badge badge-soft-secondary">Product</span>
                    </div>

                    <div class="mt-4 pt-1">
                        <a href="candidate-overview" class="btn btn-soft-primary d-block">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
@endsection

@section('script')
    <!-- bootstrap-datepicker js -->
    <script src="{{ URL::asset('build/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>
    <!-- candidate-list js -->
    <script src="{{ URL::asset('build/js/pages/candidate-list.init.js') }}"></script>
@endsection
