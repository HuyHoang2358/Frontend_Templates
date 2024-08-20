@extends('layouts.master')

@section('title')
    @lang('translation.Create_New')
@endsection

@section('css')
    <!-- bootstrap datepicker -->
    <link href="{{ URL::asset('build/libs/bootstrap-datepicker/css/bootstrap-datepicker.min.css') }}" rel="stylesheet">

    <!-- dropzone css -->
    <link href="{{ URL::asset('build/libs/dropzone/dropzone.css') }}" rel="stylesheet" type="text/css" />
@endsection

@section('content')
    @component('components.breadcrumb')
        @slot('li_1')
            Projects
        @endslot
        @slot('title')
            Create New
        @endslot
    @endcomponent

    <form id="createproject-form" autocomplete="off" class="needs-validation" novalidate>

        <div class="row">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-body">
                        <input type="hidden" class="form-control" id="formAction" name="formAction" value="add">
                        <input type="hidden" class="form-control" id="project-id-input">
                        <div class="mb-3">
                            <label for="projectname-input" class="form-label">Project Name</label>

                            <input id="projectname-input" name="projectname-input" type="text" class="form-control"
                                placeholder="Enter project name..." required>
                            <div class="invalid-feedback">Please enter a project name.</div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Project Image</label>

                            <div class="text-center">
                                <div class="position-relative d-inline-block">
                                    <div class="position-absolute bottom-0 end-0">
                                        <label for="project-image-input" class="mb-0" data-bs-toggle="tooltip"
                                            data-bs-placement="right" title="Select Image">
                                            <div class="avatar-xs">
                                                <div
                                                    class="avatar-title bg-light border rounded-circle text-muted cursor-pointer shadow font-size-16">
                                                    <i class='bx bxs-image-alt'></i>
                                                </div>
                                            </div>
                                        </label>
                                        <input class="form-control d-none" value="" id="project-image-input"
                                            type="file" accept="image/png, image/gif, image/jpeg">
                                    </div>
                                    <div class="avatar-lg">
                                        <div class="avatar-title bg-light rounded-circle">
                                            <img src="" id="projectlogo-img"
                                                class="avatar-md h-auto rounded-circle" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="projectdesc-input" class="form-label">Project Description</label>
                            <textarea class="form-control" id="projectdesc-input" rows="3" placeholder="Enter project description..."
                                required></textarea>
                            <div class="invalid-feedback">Please enter a project description.</div>
                        </div>
                        <div class="mb-3 position-relative">
                            <label for="task-assign-input" class="form-label">Assigned To</label>

                            <div class="avatar-group justify-content-center" id="assignee-member"></div>

                            <div class="select-element" id="select-element">
                                <button class="btn btn-light w-100 d-flex justify-content-between" type="button"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <span>Assigned To<b id="total-assignee" class="mx-1">0</b>Members</span> <i
                                        class="mdi mdi-chevron-down"></i>
                                </button>
                                <div class="dropdown-menu w-100">
                                    <div data-simplebar style="max-height: 172px">
                                        <ul class="list-unstyled mb-0 assignto-list">
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <div class="avatar-xs flex-shrink-0 me-2">
                                                        <img src="{{ URL::asset('build/images/users/avatar-2.jpg') }}" alt=""
                                                            class="img-fluid rounded-circle" />
                                                    </div>
                                                    <div class="flex-grow-1">Tommie Metzler</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <div class="avatar-xs flex-shrink-0 me-2">
                                                        <img src="{{ URL::asset('build/images/users/avatar-3.jpg') }}" alt=""
                                                            class="img-fluid rounded-circle" />
                                                    </div>
                                                    <div class="flex-grow-1">Paul Barone</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <div class="avatar-xs flex-shrink-0 me-2">
                                                        <img src="{{ URL::asset('build/images/users/avatar-4.jpg') }}" alt=""
                                                            class="img-fluid rounded-circle" />
                                                    </div>
                                                    <div class="flex-grow-1">Chris Lucas</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <div class="avatar-xs flex-shrink-0 me-2">
                                                        <img src="{{ URL::asset('build/images/users/avatar-1.jpg') }}" alt=""
                                                            class="img-fluid rounded-circle" />
                                                    </div>
                                                    <div class="flex-grow-1">Shirley North</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <div class="avatar-xs flex-shrink-0 me-2">
                                                        <img src="{{ URL::asset('build/images/users/avatar-5.jpg') }}" alt=""
                                                            class="img-fluid rounded-circle" />
                                                    </div>
                                                    <div class="flex-grow-1">Patricia Pierce</div>
                                                </a>
                                            </li>

                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <div class="avatar-xs flex-shrink-0 me-2">
                                                        <img src="{{ URL::asset('build/images/users/avatar-6.jpg') }}" alt=""
                                                            class="img-fluid rounded-circle" />
                                                    </div>
                                                    <div class="flex-grow-1">William Max</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <div class="avatar-xs flex-shrink-0 me-2">
                                                        <img src="{{ URL::asset('build/images/users/avatar-7.jpg') }}" alt=""
                                                            class="img-fluid rounded-circle" />
                                                    </div>
                                                    <div class="flex-grow-1">Johnnie Walton</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item d-flex align-items-center" href="#">
                                                    <div class="avatar-xs flex-shrink-0 me-2">
                                                        <img src="{{ URL::asset('build/images/users/avatar-8.jpg') }}" alt=""
                                                            class="img-fluid rounded-circle" />
                                                    </div>
                                                    <div class="flex-grow-1">Miriam Crum</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label class="form-label">Attached Files</label>
                            <div class="fallback dropzone" id="myId" enctype="multipart/form-data">
                                <div class="fallback">
                                    <input name="file" type="file" multiple />
                                </div>

                                <div class="dz-message needsclick">
                                    <div class="mb-3">
                                        <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                                    </div>

                                    <h4>Drop files here or click to upload.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->

            </div>
            <!-- end col -->
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">Publish</h5>

                        <div class="mb-3">
                            <label class="form-label" for="project-status-input">Status</label>
                            <select class="form-select" id="project-status-input">
                                <option value="Completed">Completed</option>
                                <option value="Inprogress" selected>Inprogress</option>
                                <option value="Delay">Delay</option>
                            </select>
                            <div class="invalid-feedback">Please select project status.</div>
                        </div>

                        <div>
                            <label class="form-label" for="project-visibility-input">Visibility</label>
                            <select class="form-select" id="project-visibility-input">
                                <option value="Private">Private</option>
                                <option value="Public">Public</option>
                                <option value="Team">Team</option>
                            </select>
                        </div>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title mb-3">Due Date</h5>

                        <input type="text" id="duedate-input" class="form-control" placeholder="Select due date"
                            name="due date" data-date-format="dd M, yyyy" data-provide="datepicker"
                            data-date-autoclose="true" required />
                        <div class="invalid-feedback">Please select due date.</div>
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->

            <div class="col-lg-8">
                <div class="text-end mb-4">
                    <button type="submit" class="btn btn-primary">Create Project</button>
                </div>
            </div>
        </div>
        <!-- end row -->
    </form>
@endsection
@section('script')
    <!-- bootstrap datepicker -->
    <script src="{{ URL::asset('build/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>
    <!-- dropzone plugin -->
    <script src="{{ URL::asset('build/libs/dropzone/dropzone-min.js') }}"></script>
    <script src="{{ URL::asset('build/js/pages/project-create.init.js') }}"></script>
@endsection
