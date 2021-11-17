<!--begin::Toolbar wrapper-->
<div class="d-flex flex-shrink-0">

    

    <!--begin::Chat-->
    <div class="d-flex align-items-center ms-3">
        <!--begin::Menu wrapper-->
        <div class="btn btn-icon btn-primary w-40px h-40px pulse pulse-white"  {{ theme()->putProVersionTooltip() }} id="kt_drawer_chat_toggle">
            {!! theme()->getSvgIcon("icons/duotune/communication/com012.svg", "svg-icon-2") !!}
            <span class="pulse-ring"></span>
        </div>
         {{ theme()->getView('partials/topbar/_notifications-menu', array('notifications-bg' => 'misc/pattern-5.png')) }}
        <!--end::Menu wrapper-->
    </div>
    <!--end::Chat-->
</div>
<!--end::Toolbar wrapper-->
