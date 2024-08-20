@extends('layouts.master-layouts')

@section('title') @lang('translation.Scrollable') @endsection

@section('body')
    <body data-topbar="dark" data-layout="horizontal" data-layout-scrollable="true">
@endsection

@section('content')

    @component('components.breadcrumb')
        @slot('li_1') Layouts @endslot
        @slot('title') Scrollable @endslot
    @endcomponent
        


@endsection
@section('script')

    <!-- dashboard init -->
    <script src="{{ URL::asset('build/js/pages/dashboard.init.js') }}"></script>
@endsection

