@extends('layouts.master')

@section('title') @lang('translation.Boxed_Width') @endsection

@section('body')

<body data-sidebar="dark" data-keep-enlarged="true" class="vertical-collpsed" data-layout-size="boxed">
    @endsection

    @section('content')

    @component('components.breadcrumb')
    @slot('li_1') Layouts @endslot
    @slot('title') Boxed Width @endslot
    @endcomponent



    @endsection
    @section('script')

    <!-- dashboard init -->
    <script src="{{ URL::asset('build/js/pages/dashboard.init.js') }}"></script>
    @endsection