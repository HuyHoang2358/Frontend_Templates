@extends('layouts.master')

@section('title')
    @lang('translation.Orders')
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
            Orders
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
                                    <input type="text" class="form-control" autocomplete="off" id="searchTableList"
                                        placeholder="Search...">
                                    <i class="bx bx-search-alt search-icon"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="text-sm-end">
                                <button type="button" data-bs-toggle="modal" data-bs-target="#newOrderModal"
                                    class="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2 addOrder-modal"><i
                                        class="mdi mdi-plus me-1"></i> Add New Order</button>
                            </div>
                        </div><!-- end col-->
                    </div>

                    <div class="table-responsive">
                        <table class="table align-middle table-nowrap dt-responsive nowrap w-100 table-check"
                            id="order-list">
                            <thead class="table-light">
                                <tr>
                                    <th style="width: 20px;" class="align-middle">
                                        <div class="form-check font-size-16">
                                            <input class="form-check-input" type="checkbox" id="checkAll">
                                            <label class="form-check-label" for="checkAll"></label>
                                        </div>
                                    </th>
                                    <th class="align-middle">Order ID</th>
                                    <th class="align-middle">Billing Name</th>
                                    <th class="align-middle">Date</th>
                                    <th class="align-middle">Total</th>
                                    <th class="align-middle">Payment Status</th>
                                    <th class="align-middle">Payment Method</th>
                                    <th class="align-middle">View Details</th>
                                    <th class="align-middle">Action</th>
                                </tr>
                            </thead>
                        </table>
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
    <div class="modal fade orderdetailsModal" tabindex="-1" role="dialog" aria-labelledby="orderdetailsModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="orderdetailsModalLabel">Order Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="orderlist-overview">
                        <p class="mb-2">Product id: <span class="list-id text-primary">#SK2540</span></p>
                        <p class="mb-4">Billing Name: <span class="orderlist-customer text-primary">Neal Matthews</span>
                        </p>

                        <div class="table-responsive">
                            <table class="table align-middle table-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div>
                                                <img src="{{ URL::asset('build/images/product/img-7.png') }}" alt="" class="avatar-sm">
                                            </div>
                                        </th>
                                        <td>
                                            <div>
                                                <h5 class="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                                                <p class="text-muted mb-0">$ 225 x 1</p>
                                            </div>
                                        </td>
                                        <td>$ 255</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div>
                                                <img src="{{ URL::asset('build/images/product/img-4.png') }}" alt="" class="avatar-sm">
                                            </div>
                                        </th>
                                        <td>
                                            <div>
                                                <h5 class="text-truncate font-size-14">Hoodie (Blue)</h5>
                                                <p class="text-muted mb-0">$ 145 x 1</p>
                                            </div>
                                        </td>
                                        <td>$ 145</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 class="m-0 text-right">Sub Total:</h6>
                                        </td>
                                        <td>
                                            $ 400
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 class="m-0 text-right">Shipping:</h6>
                                        </td>
                                        <td>
                                            Free
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <h6 class="m-0 text-right">Total:</h6>
                                        </td>
                                        <td>
                                            $ 400
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!-- end orderdetailsModal -->

    <!-- Modal -->
    <div class="modal fade" id="newOrderModal" tabindex="-1" aria-labelledby="newOrderModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="newOrderModalLabel">Add New Order</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form autocomplete="off" class="needs-validation createorder-form" id="createorder-form" novalidate>
                        <div class="row">
                            <div class="col-lg-12">
                                <input type="hidden" class="form-control" id="orderid-input">
                                <div class="mb-3">
                                    <label for="customername-field" class="form-label">Customer Name</label>
                                    <input type="text" id="customername-field" class="form-control"
                                        placeholder="Enter name" required />
                                    <div class="invalid-feedback">Please enter a name.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="orderdate-input" class="form-label">Order Date</label>
                                    <input type="text" id="orderdate-input" class="form-control"
                                        placeholder="Enter order date" data-date-format="dd M, yyyy"
                                        data-provide="datepicker" data-date-autoclose="true" required />
                                    <div class="invalid-feedback">Please select a date.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="payamount-input" class="form-label">Amount</label>
                                    <input type="text" id="payamount-input" class="form-control"
                                        placeholder="Enter amount" required />
                                    <div class="invalid-feedback">Please enter amount.</div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="paystatus-input" class="form-label">Payment Status</label>
                                    <select class="form-select" id="paystatus-input" required>
                                        <option value="Chargeback">Chargeback</option>
                                        <option value="Paid" selected>Paid</option>
                                        <option value="Refund">Refund</option>
                                    </select>
                                    <div class="invalid-feedback">Please select a payment status.</div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="mb-3">
                                    <label for="paymethod-input" class="form-label">Payment Method</label>
                                    <select class="form-select" id="paymethod-input">
                                        <option value="Mastercard">Mastercard</option>
                                        <option value="Visa">Visa</option>
                                        <option value="Paypal">Paypal</option>
                                        <option value="COD">COD</option>
                                    </select>
                                    <div class="invalid-feedback">Please select a payment method.</div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="text-end">
                                    <button type="button" class="btn btn-outline-secondary"
                                        data-bs-dismiss="modal">Cancel</button>
                                    <button type="submit" id="addNewOrder-btn" class="btn btn-success">Create</button>
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
    <!-- end newOrderModal -->

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
                    <p class="text-muted font-size-16 mb-4">Are you Sure You want to Remove this Order ?</p>

                    <div class="hstack gap-2 justify-content-center mb-0">
                        <button type="button" class="btn btn-danger" id="remove-item">Remove Now</button>
                        <button type="button" class="btn btn-secondary" id="close-removeOrderModal"
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

    <!-- ecommerce-order-list init -->
    <script src="{{ URL::asset('build/js/pages/ecommerce-order-list.init.js') }}"></script>
@endsection
