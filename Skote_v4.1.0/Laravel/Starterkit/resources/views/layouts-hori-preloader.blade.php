@extends('layouts.master-layouts')

@section('title') @lang('translation.Preloader') @endsection

@section('body')

<body data-topbar="dark" data-layout="horizontal">
    <!-- Loader -->
    <div id="preloader">
        <div id="status">
            <div class="spinner-chase">
                <div class="chase-dot"></div>
                <div class="chase-dot"></div>
                <div class="chase-dot"></div>
                <div class="chase-dot"></div>
                <div class="chase-dot"></div>
                <div class="chase-dot"></div>
            </div>
        </div>
    </div>
    @endsection

    @section('content')

    @component('components.breadcrumb')
    @slot('li_1') Layouts @endslot
    @slot('title') Preloader @endslot
    @endcomponent



    @endsection
    @section('script')

    <!-- dashboard init -->
    <script src="{{ URL::asset('build/js/pages/dashboard.init.js') }}"></script>
    @endsection