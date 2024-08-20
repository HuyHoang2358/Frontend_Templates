@extends('layouts.master')

@section('title') @lang('translation.Apply_Job') @endsection

@section('content')

@component('components.breadcrumb')
@slot('li_1') Jobs @endslot
@slot('title') Job Apply @endslot
@endcomponent

<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body border-bottom">
                <div class="d-flex align-items-center">
                    <h5 class="mb-0 card-title flex-grow-1">Applied Jobs</h5>
                    <div class="flex-shrink-0">
                        <select class="form-select" aria-label="Default select example">
                            <option value="Today" selected>Today</option>
                            <option value="1 Monthly">1 Month</option>
                            <option value="6 Month">6 Month</option>
                            <option value="1 Years">1 Year</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered align-middle nowrap">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Job Title</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">Apply Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Magento Developer</td>
                                <td>Creative Agency</td>
                                <td><span class="badge badge-soft-success">Full Time</span></td>
                                <td>02 June 2021</td>
                                <td><span class="badge bg-success">Active</span></td>
                                <td>
                                    <ul class="list-unstyled hstack gap-1 mb-0">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                            <a href="#jobDelete" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Apple School & College</td>
                                <td>Themesbrand</td>
                                <td><span class="badge badge-soft-danger">Part Time</span></td>
                                <td>15 June 2021</td>
                                <td><span class="badge bg-info">New</span></td>
                                <td>
                                    <ul class="list-unstyled hstack gap-1 mb-0">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                            <a href="#jobDelete" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Marketing Director</td>
                                <td>Web Technology pvt.Ltd</td>
                                <td><span class="badge badge-soft-success">Full Time</span></td>
                                <td>02 June 2021</td>
                                <td><span class="badge bg-danger">Close</span></td>
                                <td>
                                    <ul class="list-unstyled hstack gap-1 mb-0">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                            <a href="#jobDelete" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>HTML Developer</td>
                                <td>Skote Technology pvt.Ltd</td>
                                <td><span class="badge badge-soft-success">Full Time</span></td>
                                <td>02 June 2021</td>
                                <td><span class="badge bg-success">Active</span></td>
                                <td>
                                    <ul class="list-unstyled hstack gap-1 mb-0">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                            <a href="#jobDelete" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Product Sales Specialist</td>
                                <td>New Technology pvt.Ltd</td>
                                <td><span class="badge badge-soft-danger">Part Time</span></td>
                                <td>25 June 2021</td>
                                <td><span class="badge bg-info">New</span></td>
                                <td>
                                    <ul class="list-unstyled hstack gap-1 mb-0">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                            <a href="#jobDelete" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Magento Developer</td>
                                <td>Themesbrand</td>
                                <td><span class="badge badge-soft-info">Freelance</span></td>
                                <td>25 June 2021</td>
                                <td><span class="badge text-bg-danger">Close</span></td>
                                <td>
                                    <ul class="list-unstyled hstack gap-1 mb-0">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                            <a href="#jobDelete" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Magento Developer</td>
                                <td>Web Technology pvt.Ltd</td>
                                <td><span class="badge badge-soft-danger">Part Time</span></td>
                                <td>25 June 2021</td>
                                <td><span class="badge text-bg-success">Active</span></td>
                                <td>
                                    <ul class="list-unstyled hstack gap-1 mb-0">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                            <a href="#jobDelete" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Magento Developer</td>
                                <td>Web Technology pvt.Ltd</td>
                                <td><span class="badge badge-soft-success">Full Time</span></td>
                                <td>02 June 2021</td>
                                <td><span class="badge text-bg-danger">Close</span></td>
                                <td>
                                    <ul class="list-unstyled hstack gap-1 mb-0">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                            <a href="#jobDelete" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Magento Developer</td>
                                <td>Adobe Agency</td>
                                <td><span class="badge badge-soft-info">Freelance</span></td>
                                <td>02 June 2021</td>
                                <td><span class="badge text-bg-info">New</span></td>
                                <td>
                                    <ul class="list-unstyled hstack gap-1 mb-0">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                            <a href="#jobDelete" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>Magento Developer</td>
                                <td>Web Technology pvt.Ltd</td>
                                <td><span class="badge badge-soft-warning">Internship</span></td>
                                <td>02 June 2021</td>
                                <td><span class="badge text-bg-success">Active</span></td>
                                <td>
                                    <ul class="list-unstyled hstack gap-1 mb-0">
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                                            <a href="job-details" class="btn btn-sm btn-soft-primary"><i class="mdi mdi-eye-outline"></i></a>
                                        </li>
                                        <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                            <a href="#jobDelete" data-bs-toggle="modal" class="btn btn-sm btn-soft-danger"><i class="mdi mdi-delete-outline"></i></a>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="row justify-content-between align-items-center">
                    <div class="col-auto me-auto">
                        <p class="text-muted mb-0">Showing <b>1</b> to <b>12</b> of <b>45</b> entries</p>
                    </div>
                    <div class="col-auto">
                        <div class="card d-inline-block mb-0">
                            <div class="card-body p-2">
                                <nav aria-label="Page navigation example" class="mb-0">
                                    <ul class="pagination mb-0">
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                                        <li class="page-item active"><a class="page-link" href="javascript:void(0);">2</a></li>
                                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                                        <li class="page-item"><a class="page-link" href="javascript:void(0);">...</a></li>
                                        <li class="page-item"><a class="page-link" href="javascript:void(0);">12</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="javascript:void(0);" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
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
                <button type="button" class="btn-close position-absolute end-0 top-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
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
<script src="{{URL::asset('build/js/app.js')}}"></script>
@endsection
