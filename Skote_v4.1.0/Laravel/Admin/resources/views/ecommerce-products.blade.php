@extends('layouts.master')

@section('title')
    @lang('translation.Products')
@endsection

@section('css')
    <!-- ION Slider -->
    <link href="{{ URL::asset('build/libs/ion-rangeslider/css/ion.rangeSlider.min.css') }}" rel="stylesheet" type="text/css" />
@endsection

@section('content')
    @component('components.breadcrumb')
        @slot('li_1')
            Ecommerce
        @endslot
        @slot('title')
            Products
        @endslot
    @endcomponent

    <div class="row">
        <div class="col-lg-3">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-4">Filter</h4>

                    <div>
                        <h5 class="font-size-14 mb-3">Clothes</h5>
                        <ul class="list-unstyled product-list">
                            <li><a href="javascript: void(0);"><i class="mdi mdi-chevron-right me-1"></i> <span
                                        class="tablist-name">All</span></a></li>
                            <li><a href="javascript: void(0);"><i class="mdi mdi-chevron-right me-1"></i> <span
                                        class="tablist-name">T-shirts</span></a></li>
                            <li><a href="javascript: void(0);"><i class="mdi mdi-chevron-right me-1"></i> <span
                                        class="tablist-name">Shirts</span></a></li>
                            <li><a href="javascript: void(0);"><i class="mdi mdi-chevron-right me-1"></i> <span
                                        class="tablist-name">Jeans</span></a></li>
                            <li><a href="javascript: void(0);"><i class="mdi mdi-chevron-right me-1"></i> <span
                                        class="tablist-name">Jackets</span></a></li>
                        </ul>
                    </div>
                    <div class="mt-4 pt-3">
                        <h5 class="font-size-14 mb-3">Price</h5>
                        <input type="text" id="pricerange">
                    </div>

                    <div class="mt-4 pt-3" id="discount-filter">
                        <h5 class="font-size-14 mb-3">Discount</h5>

                        <div class="form-check mt-2">
                            <input class="form-check-input" name="discountCheckbox" type="checkbox" value="0"
                                id="productdiscountCheck1">
                            <label class="form-check-label" for="productdiscountCheck1">Less than 10%</label>
                        </div>

                        <div class="form-check mt-2">
                            <input class="form-check-input" name="discountCheckbox" type="checkbox" value="10"
                                id="productdiscountCheck2">
                            <label class="form-check-label" for="productdiscountCheck2">10% or more</label>
                        </div>

                        <div class="form-check mt-2">
                            <input class="form-check-input" name="discountCheckbox" type="checkbox" value="20"
                                id="productdiscountCheck3">
                            <label class="form-check-label" for="productdiscountCheck3">20% or more</label>
                        </div>

                        <div class="form-check mt-2">
                            <input class="form-check-input" name="discountCheckbox" type="checkbox" value="30"
                                id="productdiscountCheck4">
                            <label class="form-check-label" for="productdiscountCheck4">30% or more</label>
                        </div>

                        <div class="form-check mt-2">
                            <input class="form-check-input" name="discountCheckbox" type="checkbox" value="40"
                                id="productdiscountCheck5">
                            <label class="form-check-label" for="productdiscountCheck5">40% or more</label>
                        </div>

                        <div class="form-check mt-2">
                            <input class="form-check-input" name="discountCheckbox" type="checkbox" value="50"
                                id="productdiscountCheck6">
                            <label class="form-check-label" for="productdiscountCheck6">50% or more</label>
                        </div>

                    </div>

                    <div class="mt-4 pt-3">
                        <h5 class="font-size-14 mb-3">Customer Rating</h5>
                        <div id="rating-filter">
                            <div class="form-check mt-2">
                                <input class="form-check-input" type="checkbox" id="productratingCheck1">
                                <label class="form-check-label" for="productratingCheck1">
                                    <span class="rate-value">4</span> <i class="bx bxs-star text-warning"></i> & Above
                                </label>
                            </div>
                            <div class="form-check mt-2">
                                <input class="form-check-input" type="checkbox" id="productratingCheck2">
                                <label class="form-check-label" for="productratingCheck2">
                                    <span class="rate-value">3</span> <i class="bx bxs-star text-warning"></i> & Above
                                </label>
                            </div>
                            <div class="form-check mt-2">
                                <input class="form-check-input" type="checkbox" id="productratingCheck3">
                                <label class="form-check-label" for="productratingCheck3">
                                    <span class="rate-value">2</span> <i class="bx bxs-star text-warning"></i> & Above
                                </label>
                            </div>

                            <div class="form-check mt-2">
                                <input class="form-check-input" type="checkbox" id="productratingCheck4">
                                <label class="form-check-label" for="productratingCheck4">
                                    <span class="rate-value">1</span> <i class="bx bxs-star text-warning"></i> & Above
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-lg-9">

            <div class="row mb-3">
                <div class="col-xl-4 col-sm-6">
                    <div class="mt-2">
                        <h5>Clothes</h5>
                    </div>
                </div>
                <div class="col-lg-8 col-sm-6">
                    <form class="mt-4 mt-sm-0 float-sm-end d-sm-flex align-items-center">
                        <div class="search-box me-2">
                            <div class="position-relative">
                                <input type="text" class="form-control border-0" id="searchProductList"
                                    autocomplete="off" placeholder="Search...">
                                <i class="bx bx-search-alt search-icon"></i>
                            </div>
                        </div>
                        <ul class="nav nav-pills product-view-nav justify-content-end mt-3 mt-sm-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="#"><i class="bx bx-grid-alt align-middle"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="bx bx-list-ul align-middle"></i></a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div class="row" id="product-list">
                <div class="col-xl-4 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="product-img position-relative">
                                <div class="avatar-sm product-ribbon">
                                    <span class="avatar-title rounded-circle bg-primary">
                                        - 25 %
                                    </span>
                                </div>
                                <img src="{{ URL::asset('build/images/product/img-1.png') }}" alt=""
                                    class="img-fluid mx-auto d-block">
                            </div>
                            <div class="mt-4 text-center">
                                <h5 class="mb-3 text-truncate"><a href="javascript: void(0);" class="text-dark">Half
                                        sleeve T-shirt </a></h5>

                                <p class="text-muted">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                </p>
                                <h5 class="my-0"><span class="text-muted me-2"><del>$500</del></span> <b>$450</b></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="product-img position-relative">
                                <img src="{{ URL::asset('build/images/product/img-2.png') }}" alt=""
                                    class="img-fluid mx-auto d-block">
                            </div>
                            <div class="mt-4 text-center">
                                <h5 class="mb-3 text-truncate"><a href="javascript: void(0);" class="text-dark">Light
                                        blue T-shirt</a></h5>

                                <p class="text-muted">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star"></i>
                                </p>
                                <h5 class="my-0"><span class="text-muted me-2"><del>$240</del></span> <b>$225</b></h5>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="product-img position-relative">
                                <div class="avatar-sm product-ribbon">
                                    <span class="avatar-title rounded-circle  bg-primary">
                                        - 20 %
                                    </span>
                                </div>
                                <img src="{{ URL::asset('build/images/product/img-3.png') }}" alt=""
                                    class="img-fluid mx-auto d-block">
                            </div>
                            <div class="mt-4 text-center">
                                <h5 class="mb-3 text-truncate"><a href="javascript: void(0);" class="text-dark">Black
                                        Color T-shirt</a></h5>

                                <p class="text-muted">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star"></i>
                                </p>
                                <h5 class="my-0"><span class="text-muted me-2"><del>$175</del></span> <b>$152</b></h5>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="product-img position-relative">
                                <img src="{{ URL::asset('build/images/product/img-4.png') }}" alt=""
                                    class="img-fluid mx-auto d-block">
                            </div>
                            <div class="mt-4 text-center">
                                <h5 class="mb-3 text-truncate"><a href="javascript: void(0);" class="text-dark">Hoodie
                                        (Blue)</a></h5>

                                <p class="text-muted">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star"></i>
                                </p>
                                <h5 class="my-0"><span class="text-muted me-2"><del>$150</del></span> <b>$145</b></h5>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                    <div class="card">
                        <div class="card-body">

                            <div class="product-img position-relative">
                                <div class="avatar-sm product-ribbon">
                                    <span class="avatar-title rounded-circle  bg-primary">
                                        - 22 %
                                    </span>
                                </div>
                                <img src="{{ URL::asset('build/images/product/img-5.png') }}" alt=""
                                    class="img-fluid mx-auto d-block">
                            </div>
                            <div class="mt-4 text-center">
                                <h5 class="mb-3 text-truncate"><a href="javascript: void(0);" class="text-dark">Half
                                        sleeve T-Shirt</a></h5>

                                <p class="text-muted">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star"></i>
                                </p>
                                <h5 class="my-0"><span class="text-muted me-2"><del>$145</del></span> <b>$138</b></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <div class="product-img position-relative">
                                <div class="avatar-sm product-ribbon">
                                    <span class="avatar-title rounded-circle bg-primary">
                                        - 28 %
                                    </span>
                                </div>
                                <img src="{{ URL::asset('build/images/product/img-6.png') }}" alt=""
                                    class="img-fluid mx-auto d-block">
                            </div>
                            <div class="mt-4 text-center">
                                <h5 class="mb-3 text-truncate"><a href="javascript: void(0);" class="text-dark">Green
                                        color T-shirt</a></h5>

                                <p class="text-muted">
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star text-warning"></i>
                                    <i class="bx bxs-star"></i>
                                </p>
                                <h5 class="my-0"><span class="text-muted me-2"><del>$138</del></span> <b>$135</b></h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- end row -->

            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center mt-2 mb-5">
                        <a href="javascript:void(0);" class="text-success"><i
                                class="bx bx-loader bx-spin font-size-18 align-middle me-2"></i> Load more </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
@endsection
@section('script')
    <!-- Ion Range Slider-->
    <script src="{{ URL::asset('build/libs/ion-rangeslider/js/ion.rangeSlider.min.js') }}"></script>

    <!-- init js -->
    <script src="{{ URL::asset('build/js/pages/product-list.init.js') }}"></script>
@endsection
