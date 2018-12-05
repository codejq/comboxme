        $(function () {
            $(".bs-searchbox input").blur(function () {
                var numberOfActiveItems = $(this).closest(".dropdown-menu").find("li.active").length;
                if (numberOfActiveItems > 0) return;
                console.log(numberOfActiveItems);
                var selectBoxName = $(this).closest(".comboxme").find("select")[0].name;
                $("#" + selectBoxName + " option[value='-1']").remove();
                $("#" + selectBoxName)
                    .append('<option value="-1" selected>' + $(this).val() + '</option>')
                    .selectpicker('refresh');
                $("#" + selectBoxName + "_add").remove();
                $(this).closest("form").append('<input type="hidden" id="' + selectBoxName + '_add" name="' + selectBoxName + '_add" value="' + $(this).val() + '" />');
            });
        });
