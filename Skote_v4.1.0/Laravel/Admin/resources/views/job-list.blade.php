@extends('layouts.master')

@section('title')
    @lang('translation.Job_List')
@endsection
@section('css')
    <!-- bootstrap-datepicker css -->
    <link href="{{ URL::asset('build/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css') }}" rel="stylesheet" type="text/css">

    <!-- DataTables -->
    <link href="{{ URL::asset('build/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css') }}" rel="stylesheet" type="text/css" />

    <!-- Responsive datatable examples -->
    <link href="{{ URL::asset('build/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css') }}" rel="stylesheet"
        type="text/css" />
@endsection

@section('content')
    @component('components.breadcrumb')
        @slot('li_1')
            Jobs
        @endslot
        @slot('title')
            Jobs List
        @endslot
    @endcomponent

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body border-bottom">
                    <div class="d-flex align-items-center">
                        <h5 class="mb-0 card-title flex-grow-1">Jobs Lists</h5>
                        <div class="flex-shrink-0">
                            <a href="#!" class="btn btn-primary">Add New Job</a>
                            <a href="#!" class="btn btn-light"><i class="mdi mdi-refresh"></i></a>
                            <div class="dropdown d-inline-block">

                                <button type="menu" class="btn btn-success" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false"><i
                                        class="mdi mdi-dots-vertical"></i></button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body border-bottom">
                    <div class="row g-3">
                        <div class="col-xxl-4 col-lg-6">
                            <input type="search" class="form-control" id="searchTableList" placeholder="Search for ...">
                        </div>
                        <div class="col-xxl-2 col-lg-6">
                            <select class="form-select" id="idStatus" aria-label="Default select example">
                                <option value="all">Status</option>
                                <option value="Active">Active</option>
                                <option value="New">New</option>
                                <option value="Close">Close</option>
                            </select>
                        </div>
                        <div class="col-xxl-2 col-lg-4">
                            <select class="form-select" id="idType" aria-label="Default select example">
                                <option value="all">Select Type</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                            </select>
                        </div>
                        <div class="col-xxl-2 col-lg-4">
                            <div id="datepicker1">
                                <input type="text" class="form-control" placeholder="Select date"
                                    data-date-format="dd M, yyyy" data-date-container='#datepicker1'
                                    data-date-autoclose="true" data-provide="datepicker">
                            </div><!-- input-group -->
                        </div>
                        <div class="col-xxl-2 col-lg-4">
                            <button type="button" class="btn btn-soft-secondary w-100" onclick="filterData();"><i
                                    class="mdi mdi-filter-outline align-middle"></i> Filter</button>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table align-middle dt-responsive nowrap w-100 table-check" id="job-list">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Job Title</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Experience</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Posted Date</th>
                                    <th scope="col">Last Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                        </table>
                        <!-- end table -->
                    </div>
                    <!-- end table responsive -->
                </div>
                <!-- end card body -->
            </div>
            <!--end card-->
        </div>
        <!--end col-->

    </div>
    <!--end row-->

    <!-- Modal -->
    <div class="modal fade" id="jobDelete" tabindex="-1" aria-labelledby="jobDeleteLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body px-4 py-5 text-center">
                    <button type="button" class="btn-close position-absolute end-0 top-0 m-3" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    <div class="avatar-sm mb-4 mx-auto">
                        <div class="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">
                            <i class="mdi mdi-trash-can-outline"></i>
                        </div>
                    </div>
                    <p class="text-muted font-size-16 mb-4">Are you sure you want to permanently erase the job.</p>

                    <div class="hstack gap-2 justify-content-center mb-0">
                        <button type="button" class="btn btn-danger">Delete Now</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <!-- bootstrap-datepicker js -->
    <script src="{{ URL::asset('build/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>

    <!-- Required datatable js -->
    <script src="{{ URL::asset('build/libs/datatables.net/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ URL::asset('build/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js') }}"></script>

    <!-- Responsive examples -->
    <script src="{{ URL::asset('build/libs/datatables.net-responsive/js/dataTables.responsive.min.js') }}"></script>
    <script src="{{ URL::asset('build/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js') }}"></script>

    <!-- job-list init -->
    <script src="{{ URL::asset('build/js/pages/job-list.init.js') }}"></script>
@endsection
