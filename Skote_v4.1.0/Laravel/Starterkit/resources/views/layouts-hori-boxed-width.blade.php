@extends('layouts.master-layouts')

@section('title') @lang('translation.Boxed_Width') @endsection

@section('body')
    <body data-topbar="dark" data-layout="horizontal" data-layout-size="boxed">
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

