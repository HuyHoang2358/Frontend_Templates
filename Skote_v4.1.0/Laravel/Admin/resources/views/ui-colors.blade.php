@extends('layouts.master')

@section('title')
    @lang('translation.Colors')
@endsection

@section('content')
    @component('components.breadcrumb')
        @slot('li_1')
            UI Elements
        @endslot
        @slot('title')
            Colors
        @endslot
    @endcomponent

    <div class="row">
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="rounded overflow-hidden">
                        <div class="bg-primary p-4">
                            <h5 class="my-2 text-white">#556ee6</h5>
                        </div>
                        <div class="bg-primary bg-gradient p-4">
                            <h5 class="my-2 text-white">bg-gradient</h5>
                        </div>
                        <div class="bg-primary-subtle p-4">
                            <h5 class="my-2 text-primary">bg-primary-subtle</h5>
                        </div>
                    </div>

                    <h5 class="mb-0 mt-3 text-primary">Primary</h5>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="rounded overflow-hidden">
                        <div class="bg-success p-4">
                            <h5 class="my-2 text-white">#34c38f</h5>
                        </div>
                        <div class="bg-success bg-gradient p-4">
                            <h5 class="my-2 text-white">bg-gradient</h5>
                        </div>
                        <div class="bg-success-subtle p-4">
                            <h5 class="my-2 text-success">bg-success-subtle</h5>
                        </div>
                    </div>
                    <h5 class="mb-0 mt-3 text-success">Success</h5>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="rounded overflow-hidden">
                        <div class="bg-info p-4">
                            <h5 class="my-2 text-white">#50a5f1</h5>
                        </div>
                        <div class="bg-info bg-gradient p-4">
                            <h5 class="my-2 text-white">bg-gradient</h5>
                        </div>
                        <div class="bg-info-subtle p-4">
                            <h5 class="my-2 text-info">bg-info-subtle</h5>
                        </div>
                    </div>
                    <h5 class="mb-0 mt-3 text-info">Info</h5>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="rounded overflow-hidden">
                        <div class="bg-warning p-4">
                            <h5 class="my-2 text-white">#f1b44c</h5>
                        </div>
                        <div class="bg-warning bg-gradient p-4">
                            <h5 class="my-2 text-white">bg-gradient</h5>
                        </div>
                        <div class="bg-warning-subtle p-4">
                            <h5 class="my-2 text-warning">bg-warning-subtle</h5>
                        </div>
                    </div>
                    <h5 class="mb-0 mt-3 text-warning">Warning</h5>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="rounded overflow-hidden">
                        <div class="bg-danger p-4">
                            <h5 class="my-2 text-white">#f46a6a</h5>
                        </div>
                        <div class="bg-danger bg-gradient p-4">
                            <h5 class="my-2 text-white">bg-gradient</h5>
                        </div>
                        <div class="bg-danger-subtle p-4">
                            <h5 class="my-2 text-danger">bg-danger-subtle</h5>
                        </div>
                    </div>
                    <h5 class="mb-0 mt-3 text-danger">Danger</h5>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="rounded overflow-hidden">
                        <div class="bg-dark p-4">
                            <h5 class="my-2 text-light">#343a40</h5>
                        </div>
                        <div class="bg-dark bg-gradient p-4">
                            <h5 class="my-2 text-light">bg-gradient</h5>
                        </div>
                        <div class="bg-dark-subtle p-4">
                            <h5 class="my-2 text-body">bg-dark-subtle</h5>
                        </div>
                    </div>
                    <h5 class="mb-0 mt-3 text-body">Dark</h5>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="rounded overflow-hidden">
                        <div class="bg-secondary p-4">
                            <h5 class="my-2 text-light">#74788d</h5>
                        </div>
                        <div class="bg-secondary bg-gradient p-4">
                            <h5 class="my-2 text-light">bg-gradient</h5>
                        </div>
                        <div class="bg-secondary-subtle p-4">
                            <h5 class="my-2 text-secondary">bg-secondary-subtle</h5>
                        </div>
                    </div>
                    <h5 class="mb-0 mt-3 text-muted">Secondary</h5>
                </div>
            </div>
        </div>

        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="rounded overflow-hidden">

                        <div class="bg-primary opacity-75 p-4">
                            <h5 class="my-2 text-white">opacity-75</h5>
                        </div>
                        <div class="bg-primary opacity-50 p-4">
                            <h5 class="my-2 text-white">opacity-50</h5>
                        </div>
                        <div class="bg-primary opacity-25 p-4">
                            <h5 class="my-2 text-white">opacity-25</h5>
                        </div>
                    </div>
                    <h5 class="mb-0 mt-3 text-muted">Opacity</h5>
                </div>
            </div>
        </div>

        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="rounded overflow-hidden">

                        <div class="bg-primary bg-opacity-75 p-4">
                            <h5 class="my-2">bg-opacity-75</h5>
                        </div>
                        <div class="bg-primary bg-opacity-50 p-4">
                            <h5 class="my-2">bg-opacity-50</h5>
                        </div>
                        <div class="bg-primary bg-opacity-25 p-4">
                            <h5 class="my-2">bg-opacity-25</h5>
                        </div>
                        <div class="bg-primary bg-opacity-10 p-4">
                            <h5 class="my-2">bg-opacity-10</h5>
                        </div>
                    </div>
                    <h5 class="mb-0 mt-3 text-muted">bg Opacity</h5>
                </div>
            </div>
        </div>

        <div class="col-xl-3 col-md-6">
            <div class="card">
                <div class="card-body text-center">
                    <div class="rounded overflow-hidden">

                        <div class="p-4">
                            <h5 class="my-2 text-primary text-opacity-75">text-opacity-75</h5>
                        </div>
                        <div class="p-4">
                            <h5 class="my-2 text-primary text-opacity-50">text-opacity-50</h5>
                        </div>
                        <div class="p-4">
                            <h5 class="my-2 text-primary text-opacity-25">text-opacity-25</h5>
                        </div>
                    </div>
                    <h5 class="mb-0 mt-3 text-muted">text Opacity</h5>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
@endsection
