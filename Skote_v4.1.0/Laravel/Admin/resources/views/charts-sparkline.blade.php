@extends('layouts.master')

@section('title') @lang('translation.Sparkline_Charts') @endsection

@section('content')

    @component('components.breadcrumb')
        @slot('li_1') Charts @endslot
        @slot('title') Sparkline Charts @endslot
    @endcomponent

    <div class="row">
        <div class="col-xl-4 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Pie Chart</h4>
                    <div id="sparkline1" data-colors='["--bs-success","--bs-primary", "--bs-light"]' class="text-center"></div>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Bar Chart</h4>
                    <div id="sparkline2" data-colors='["--bs-success"]' class="text-center"></div>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-6">
            <div class="card">
                <div class="card-body analytics-info">
                    <h4 class="card-title">Line Chart</h4>
                    <div id="sparkline4" data-colors='["--bs-primary"]'></div>
                </div>
            </div>
        </div>

        <div class="col-xl-4 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Composite Bar Chart</h4>
                    <div id="sparkline3" data-colors='["--bs-primary","--bs-success"]' class="text-center"></div>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Line Chart</h4>
                    <div id="sparkline5" data-colors='["--bs-primary","--bs-success"]' class="text-center"></div>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-6">
            <div class="card bg-primary">
                <div class="card-body">
                    <h4 class="card-title text-white">Discrete Chart</h4>
                    <div id="sparkline6" data-colors='["--bs-white"]' class="text-center"></div>
                </div>
            </div>
        </div>

        <div class="col-xl-4 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Bullet Chart</h4>
                    <div id="sparkline7" data-colors='["--bs-primary", "--bs-danger"]'></div>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Box Plot Chart</h4>
                    <div id="sparkline8" data-colors='["--bs-success"]' class="text-center"></div>
                </div>
            </div>
        </div>
        <div class="col-xl-4 col-sm-6">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Tristate Chart</h4>
                    <div id="sparkline9" data-colors='["--bs-primary","--bs-success","--bs-danger"]' class="text-center"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->

@endsection
@section('script')
    <script src="{{ URL::asset('build/libs/jquery-sparkline/jquery.sparkline.min.js') }}"></script>

    <script src="{{ URL::asset('build/js/pages/sparklines.init.js') }}"></script>
@endsection
