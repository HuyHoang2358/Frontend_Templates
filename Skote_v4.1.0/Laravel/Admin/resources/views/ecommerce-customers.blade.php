@extends('layouts.master')

@section('title')
    @lang('translation.Customers')
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
            Ecommerce
        @endslot
        @slot('title')
            Customers
        @endslot
    @endcomponent

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="row mb-2">
                        <div class="col-sm-4">
                            <div class="search-box me-2 mb-2 d-inline-block">
                                <div class="position-relative">
                                    <input type="text" class="form-control" id="searchTableList" placeholder="Search...">
                                    <i class="bx bx-search-alt search-icon"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="text-sm-end">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#newCustomerModal"
                                    class="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2 addCustomers-modal"><i
                                        class="mdi mdi-plus me-1"></i> New Customers</button>
                            </div>
                        </div><!-- end col-->
                    </div>

                    <div class="table-responsive">
                        <table class="table align-middle table-nowrap dt-responsive nowrap w-100" id="customerList-table">
                            <thead class="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Rating</th>
                                    <th>Wallet Balance</th>
                                    <th>Joining Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </table>
                        <!-- end table -->
                    </div>
                    <!-- end table responsive -->
                </div>
                <!-- end card body -->
            </div>
            <!-- end card -->
        </div>
        <!-- end col -->
    </div>
    <!-- end row -->

    <!-- Modal -->
    <div class="modal fade" id="newCustomerModal" tabindex="-1" aria-labelledby="newCustomerModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="newCustomerModalLabel">Add Customer</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form autocomplete="off" class="needs-validation createCustomer-form" id="createCustomer-form"
                        novalidate>
                        <div class="row">
                            <div class="col-lg-12">
                                <input type="hidden" class="form-control" id="userid-input">
                                <div class="mb-3">
                                    <label for="username-input" class="form-label">Customer Name</label>
                                    <input type="text" id="username-input" class="form-control" placeholder="Enter name"
                                        required />
                                    <div class="invalid-feedback">Please enter a name.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="email-input" class="form-label">Email</label>
                                    <input type="email" id="email-input" class="form-control" placeholder="Enter email"
                                        required />
                                    <div class="invalid-feedback">Please enter email.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="phone-input" class="form-label">Phone</label>
                                    <input type="text" id="phone-input" class="form-control" placeholder="Enter Phone"
                                        required />
                                    <div class="invalid-feedback">Please enter amount.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="joindate-input" class="form-label">Join Date</label>
                                    <input type="text" id="joindate-input" class="form-control"
                                        placeholder="Select join date" data-date-format="dd M, yyyy"
                                        data-provide="datepicker" data-date-autoclose="true" required />
                                    <div class="invalid-feedback">Please select a join date.</div>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="text-end">
                                    <button type="button" class="btn btn-outline-secondary"
                                        data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" id="addCustomer-btn" class="btn btn-success">Add
                                        Customer</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <!-- end modal body -->
            </div>
            <!-- end modal-content -->
        </div>
        <!-- end modal-dialog -->
    </div>
    <!-- end newCustomerModal -->


    <!-- Modal -->
    <div class="modal fade" id="removeItemModal" tabindex="-1" aria-hidden="true">
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
                    <p class="text-muted font-size-16 mb-4">Are you Sure You want to Remove this User ?</p>

                    <div class="hstack gap-2 justify-content-center mb-0">
                        <button type="button" class="btn btn-danger" id="remove-item">Remove Now</button>
                        <button type="button" class="btn btn-secondary" id="close-removeCustomerModal"
                            data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end removeItemModal -->
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

    <!-- ecommerce-customer-list init -->
    <script src="{{ URL::asset('build/js/pages/ecommerce-customer-list.init.js') }}"></script>
@endsection
