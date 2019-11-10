$( document ).ready(function() {
   

    $(".dropdown_accounts a").click(function() {
        if ($(".dropdowncontent_products").css("display") === "block" ) {
            $(".dropdowncontent_products").css("display", "none")
        }else if ($(".dropdowncontent_company").css("display") === "block" ) {
            $(".dropdowncontent_company").css("display", "none")
        }else if ($(".dropdowncontent_help").css("display") === "block" ) {
            $(".dropdowncontent_help").css("display", "none")
        } else if ($(".dropdowncontent_lang").css("display") === "block" ) {
            $(".dropdowncontent_lang").css("display", "none")
        }
        $(".dropdowncontent_accounts").toggle();
        $(".fa-chevron-down").css("display", "inline-block");
        $(".fa-chevron-up").css("display", "none");
    })

    $(".dropdown_products a").click(function() {
        if ($(".dropdowncontent_accounts").css("display") === "block" ) {
            $(".dropdowncontent_accounts").css("display", "none")
        }else if ($(".dropdowncontent_company").css("display") === "block" ) {
            $(".dropdowncontent_company").css("display", "none")
        } else if ($(".dropdowncontent_help").css("display") === "block" ) {
            $(".dropdowncontent_help").css("display", "none")
        } else if ($(".dropdowncontent_lang").css("display") === "block" ) {
            $(".dropdowncontent_lang").css("display", "none")
        }
        $(".dropdowncontent_products").toggle();
        $(".fa-chevron-down").css("display", "inline-block");
        $(".fa-chevron-up").css("display", "none");
    })

    $(".dropdown_company a").click(function() {
        if ($(".dropdowncontent_accounts").css("display") === "block" ) {
            $(".dropdowncontent_accounts").css("display", "none")
        } else if ($(".dropdowncontent_products").css("display") === "block" ) {
            $(".dropdowncontent_products").css("display", "none")
        } else if ($(".dropdowncontent_help").css("display") === "block" ) {
            $(".dropdowncontent_help").css("display", "none")
        }else if ($(".dropdowncontent_lang").css("display") === "block" ) {
            $(".dropdowncontent_lang").css("display", "none")
        }
        $(".dropdowncontent_company").toggle();
        $(".fa-chevron-down").css("display", "inline-block");
        $(".fa-chevron-up").css("display", "none");
    })

    $(".dropdown_help a").click(function() {
        if ($(".dropdowncontent_accounts").css("display") === "block" ) {
            $(".dropdowncontent_accounts").css("display", "none")
        } else if ($(".dropdowncontent_products").css("display") === "block" ) {
            $(".dropdowncontent_products").css("display", "none")
        } else if ($(".dropdowncontent_company").css("display") === "block" ) {
            $(".dropdowncontent_company").css("display", "none")
        } else if ($(".dropdowncontent_lang").css("display") === "block" ) {
            $(".dropdowncontent_lang").css("display", "none")
        }
        $(".dropdowncontent_help").toggle();
        $(".fa-chevron-down").css("display", "inline-block");
        $(".fa-chevron-up").css("display", "none");
    })

    $(".dropdown_lang a").click(function() {
        if ($(".dropdowncontent_accounts").css("display") === "block" ) {
            $(".dropdowncontent_accounts").css("display", "none")
        } else if ($(".dropdowncontent_products").css("display") === "block" ) {
            $(".dropdowncontent_products").css("display", "none")
        } else if ($(".dropdowncontent_company").css("display") === "block" ) {
            $(".dropdowncontent_company").css("display", "none")
        } else if ($(".dropdowncontent_help").css("display") === "block" ) {
            $(".dropdowncontent_help").css("display", "none")
        }
        $(".dropdowncontent_lang").toggle();
        if($(".fa-chevron-down").css("display") === "inline-block") {
            $(".fa-chevron-down").css("display", "none");
            $(".fa-chevron-up").css("display", "inline-block");
        } else {
            $(".fa-chevron-down").css("display", "inline-block");
            $(".fa-chevron-up").css("display", "none");
        }
    })



});