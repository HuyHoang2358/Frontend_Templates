@extends('layouts.master')

@section('title') @lang('translation.Dashboards') @endsection

@section('content')

@component('components.breadcrumb')
@slot('li_1') Dashboards @endslot
@slot('title') Dashboard @endslot
@endcomponent



@endsection
@section('script')
<!-- dashboard init -->
<script src="{{ URL::asset('build/js/pages/dashboard.init.js') }}"></script>
@endsection