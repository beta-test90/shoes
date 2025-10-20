// Import LiveKit components - wait for script to load
let {
  Room,
  RoomEvent,
  RemoteAudioTrack,
  createLocalAudioTrack,
  ConnectionQuality,
} = livekitClient;
window.iframeAiagent = null;
// Initialize LiveKit components when available
function initializeLiveKit() {
  if (typeof LivekitClient !== "undefined") {
    Room = LivekitClient.Room;
    RoomEvent = LivekitClient.RoomEvent;
    RemoteAudioTrack = LivekitClient.RemoteAudioTrack;
    createLocalAudioTrack = LivekitClient.createLocalAudioTrack;
    ConnectionQuality = LivekitClient.ConnectionQuality;
    return true;
  }
  return false;
}

/* ===============  SPA NAVIGATION WITH LIVEKIT AUDIO PRESERVATION  =============== */

/** start actions for checkout */

// const increaseQuantityCheckout = () =>{
//     var input = $(this).siblings("input");
//     var value = parseInt(input.val());
//     var max = parseInt(input.attr("max"));
//     if (value < max) {
//         input.val(value + 1);
//         updateSubtotal($(this).closest(".product_3")) ;
//         return "" ;
//     } else {
//         showToast(`${translateJs('The largest quantity you can purchase is')} ${max}. `,'error') ;
//         return `The largest quantity you can purchase is ` ;
//     }
// }

/** end actions for checkout */

/** start actions for basic product */

const updateTotal = (summary_panel) => {
  const details_with_options =
    iframeAiagent.contentWindow.AllDataProduct_ai_Agent.details_with_options
      .product;
  const product_price = summary_panel.querySelector(".product-original-price");
  let quantity_value = summary_panel.querySelector(".quantity-value");
  const btn_quantity_value_ele = summary_panel.querySelector(
    ".btn-quantity-value",
  );
  let quantity = Number(quantity_value.textContent);
  const subPrice = Number(
    product_price.getAttribute("data-subPrice") ??
    details_with_options.base_price,
  );
  const totalEle = summary_panel.querySelector(".total-price");

  if (btn_quantity_value_ele) {
    btn_quantity_value_ele.textContent = quantity;
  }

  if (totalEle) {
    const totalCalc = subPrice * quantity;
    totalEle.textContent = formatCurrencyLocalForSubtotal(
      (totalCalc * infos_currency.conversion_rate).toFixed(
        infos_currency.number_of_decimal,
      ),
      infos_currency,
    );
    totalEle.setAttribute("total_price", totalCalc);
  }
};

const handleSelectOption = (option_id, group_id, action, product_type) => {
  try {
    debugger;
    iframeAiagent.contentWindow.showSuccessWebMAnimation();
    if (option_id === -1 && product_type === "basic") {
      return handleSelectColorBasicProduct(group_id);
    } else if (product_type === "basic") {
      return handleSelectOptionsBasicProduct(`${option_id}:${group_id}`);
    }

    const el = iframeAiagent.contentWindow.document.querySelector(
      `[data-option-id="${group_id}"][data-group-id="${option_id}"]`,
    );

    if (!el) {
      console.error("No option found with this id/group");
      return false;
    }

    const btn = el.querySelector("button");
    if (!btn) {
      console.error("No button found inside this option element");
      return false;
    }

    if (el.classList.contains("active") && action === "select") {
      return "this option is already selected";
    } else if (!el.classList.contains("active") && action === "unselect") {
      return "this option are unselected already";
    }

    const minOptionsFn = (option_id) => {
      const optionGroup =
        iframeAiagent.contentWindow.currentProductDetaills.options_groups.find(
          (group) => group.id === option_id,
        );

      return optionGroup ? optionGroup.min_options : null; // ou undefined si tu préfères
    };

    const minOptions = minOptionsFn(option_id);
    const currentSelectedElement =
      iframeAiagent.contentWindow.document.querySelectorAll(
        `.option-group[data-group-id="${option_id}"] div.conatinerOption .active`,
      ).length;

    if (currentSelectedElement <= minOptions && action === "unselect") {
      return "you can't select less than " + minOptions + " options";
    }

    btn.click();

    if (el.classList.contains("active")) {
      return "option was selected with success";
    } else {
      return "option was unselected with success";
    }
  } catch (err) {
    console.error("Unexpected error:", err);
    return false;
  }
};

const positionSectionY_3 = 80;
const TextPosition = "text-left";

// action checkout

const CheckoutEvent = () => {
  const cartData = localStorage.getItem("cart");
  const cartItem = Array.from(JSON.parse(cartData || "[]"));
  if (cartItem.length !== 0) {
    return `user can be redirect to the checkout page , this is the link : ${window.location.origin}/checkout`;
  } else {
    showToast(
      translateJs("No products in cart. Add a product."),
      "error",
      positionSectionY_3,
      TextPosition,
    );
    return "no product in the cart , so the user can not handle the action of checkout";
  }
};

// action add to cart

const addToCartBasicProduct = () => {
  let cartItems = JSON.parse(localStorage.getItem("cartItems"));
  var check_qte_inventory = false;
  var good_check_invotory = false;
  // const quantityInput = document.querySelector(`.quantityNumber`)
  var TotalQuantity = quantityInput.value;
  // let min_qte = null;
  // let max_qte = null;
  if (min_qte != "null" && max_qte != "null" && quantityInput.max != 0)
    check_qte_inventory = true;
  if (check_qte_inventory) {
    if (
      parseInt(quantityInput.value) < min_qte ||
      parseInt(quantityInput.value) > max_qte
    ) {
      showToast(
        translateJs(
          "The requested quantity cannot exceed the available stock.",
        ),
        "error",
        positionSectionY_3,
        TextPosition,
      );
      return "can not add The requested quantity cannot exceed the available stock";
    } else good_check_invotory = true;
  } else {
    showToast(
      translateJs("The requested quantity cannot exceed the available stock."),
      "error",
      positionSectionY_3,
      TextPosition,
    );
    return "The requested quantity cannot exceed the available stock";
  }

  if (cartItems && cartItems.length > 0 && good_check_invotory == true) {
    Array.from(cartItems).forEach((cartItem) => {
      if (cartItem.id == wishlistLink.getAttribute("data-product-id")) {
        if (
          areObjectsEqual(
            selectedAttributesCardNames,
            cartItem.attributes_added,
          ) &&
          areObjectsEqual(selectedColorCardNames, cartItem.colors_added)
        ) {
          if (
            (quantityInput.value >= min_qte &&
              parseInt(quantityInput.value) + parseInt(cartItem.quantity) <=
              parseInt(quantityInput.max) &&
              check_qte_inventory) ||
            isNaN(parseInt(quantityInput.max))
          ) {
            good_check_invotory = true;
            TotalQuantity =
              parseInt(quantityInput.value) + parseInt(cartItem.quantity);
          } else {
            good_check_invotory = false;
            showToast(
              translateJs(
                "The requested quantity cannot exceed the available stock.",
              ),
              "error",
              positionSectionY_3,
              TextPosition,
            );
            return "The requested quantity cannot exceed the available stock";
          }
        }
      }
    });
  }

  if (good_check_invotory) {
    let customerId = null; // Use let to allow reassignment
    if (localStorage.getItem("customerInfo")) {
      let customerInfo = JSON.parse(localStorage.getItem("customerInfo"));
      customerId = customerInfo.id;
    }
    const quantity = TotalQuantity;
    const variant = selectedAttributes;
    populateAttributeText();
    let colorText = null;
    if (has_color) colorText = getActiveColorText();
    const formData = new FormData();
    formData.append("_token", $('meta[name="csrf-token"]').attr("content"));
    formData.append("product_id", wishlistLink.getAttribute("data-product-id"));
    formData.append("customer_id", customerId);
    formData.append("quantity", quantity);
    formData.append("color", selectedColor);
    formData.append("colorText", colorText);
    formData.append("variant", JSON.stringify(variant));
    formData.append("attributeText", JSON.stringify(window.attributeText));
    // Attach the file if selected
    const attachmentInput = document.querySelector(
      `#${globalSectionId} #attachmentInput`,
    );
    if (attachmentInput.files.length > 0) {
      formData.append("attachment", attachmentInput.files[0]);
    }
    $.ajax({
      url: `${window.location.origin}/cart/add`,
      method: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        handleAddToCartResponse(response);
        iframeAiagent.contentWindow.showSuccessWebMAnimation();
        return "product has been add with success to the checkout page";
      },
      error: function (error) {
        console.log("Error adding product to cart:", error);
        return "error to add user function ";
      },
    });
  }
};

// increase quantity

const increaseQuantityBasecProduct = () => {
  let currentValue = parseInt(
    iframeAiagent.contentWindow.inputNumber.value,
    10,
  );
  let maxValue = parseInt(iframeAiagent.contentWindow.inputNumber.max, 10);
  if (isNaN(maxValue)) {
    showToast(
      translateJs("The largest quantity you can purchase is 0."),
      "error",
      positionSectionY_3,
      TextPosition,
    );
    return "The largest quantity you can purchase is 0";
  } else {
    if (currentValue < maxValue) {
      iframeAiagent.contentWindow.inputNumber.value = currentValue + 1;
      return `quantity has been increassed with success ${iframeAiagent.contentWindow.inputNumber.value}`;
    } else {
      showToast(
        `${translateJs(
          "The largest quantity you can purchase is",
        )} ${maxValue}. `,
        "error",
        positionSectionY_3,
        TextPosition,
      );
      return `can not increasse the quantity The largest quantity you can purchase is' ${maxValue}. `;
    }
  }
};

// descrease quantity

const descreaseQuantityBasecProduct = () => {
  let currentValue = parseInt(
    iframeAiagent.contentWindow.inputNumber.value,
    10,
  );
  let minValue = parseInt(iframeAiagent.contentWindow.inputNumber.min, 10);
  if (currentValue > minValue) {
    iframeAiagent.contentWindow.inputNumber.value = currentValue - 1;
    return `quantity has been descrease with success , the current value is ${iframeAiagent.contentWindow.inputNumber.value}`;
  } else {
    showToast(
      `${translateJs("The minimum quantity to purchase is")} ${minValue}`,
      "error",
      positionSectionY_3,
      TextPosition,
    );
    return `The minimum quantity to purchase is ${minValue}`;
  }
};

// handle select options

const handleSelectColorBasicProduct = (id = "5") => {
  try {
    if (id === "" || !id) {
      throw new Error(
        "we can select any color without a color id passing as an argiment",
      );
    }

    const findColor = iframeAiagent.contentWindow.document.querySelector(
      `.color-2.\\3${id}`,
    );

    console.log(findColor);

    if (findColor.classList.contains("active")) {
      throw new Error("color are already selected");
    }

    findColor.click();

    return "color has been selected with succeess";
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

const handleSelectOptionsBasicProduct = (dataId = "1:1") => {
  try {
    debugger;
    console.log("data-ids", dataId);

    const parts = dataId.split(":");

    if (parts.length > 2) {
      throw new Error(
        "A lot of arguments have been passed, make sure you sent two arguments",
      );
    } else if (parts.length === 0) {
      throw new Error("No argument has been passed");
    }

    const findOption = iframeAiagent.contentWindow.document.querySelector(
      `[data-id="${dataId}"]`,
    );

    if (!findOption) {
      throw new Error("No option has been found with this id");
    }

    if (findOption.classList.contains("active")) {
      throw new Error("Option has already been selected");
    }

    findOption.click();
    return "Option has been selected with success";
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

/** end code actions */

// ai agent functions

const decreaseQuantity = () => {
  const summary_panel =
    iframeAiagent.contentWindow.section_product_modal_rs_ai_agent.querySelector(
      ".summary-panel",
    );
  let quantity_value = summary_panel.querySelector(".quantity-value");
  let min_item_on_purchase = quantity_value.getAttribute(
    "data-min_item_on_purchase",
  )
    ? Number(quantity_value.getAttribute("data-min_item_on_purchase"))
    : 1;
  const btn_quantity_value = summary_panel.querySelector(".btn-quantity-value");
  try {
    handleQuantityMinus(
      summary_panel,
      min_item_on_purchase,
      btn_quantity_value,
    );
    let quantity_value = summary_panel.querySelector(".quantity-value");
    const btn_quantity_value_ele = summary_panel.querySelector(
      ".btn-quantity-value",
    );
    let quantity = Number(quantity_value.textContent);
    const subPrice = Number(
      iframeAiagent.contentWindow.product_price.getAttribute("data-subPrice") ??
      details_with_options.base_price,
    );
    const totalEle = summary_panel.querySelector(".total-price");

    if (btn_quantity_value_ele) {
      btn_quantity_value_ele.textContent = quantity;
    }

    if (totalEle) {
      const totalCalc = subPrice * quantity;
      totalEle.textContent = formatCurrencyLocalForSubtotal(
        (totalCalc * infos_currency.conversion_rate).toFixed(
          infos_currency.number_of_decimal,
        ),
        infos_currency,
      );
      totalEle.setAttribute("total_price", totalCalc);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

const increaseQuantity = () => {
  debugger;
  const summary_panel =
    iframeAiagent.contentWindow.section_product_modal_rs_ai_agent.querySelector(
      ".summary-panel",
    );
  let quantity_value = summary_panel.querySelector(".quantity-value");
  let max_item_on_purchase = quantity_value.getAttribute(
    "data-max_item_on_purchase",
  )
    ? Number(quantity_value.getAttribute("data-max_item_on_purchase"))
    : 1;
  const btn_quantity_value = summary_panel.querySelector(".btn-quantity-value");
  try {
    handleQuantityPlus(summary_panel, max_item_on_purchase, btn_quantity_value);
    let quantity_value = summary_panel.querySelector(".quantity-value");
    const btn_quantity_value_ele = summary_panel.querySelector(
      ".btn-quantity-value",
    );
    let quantity = Number(quantity_value.textContent);
    const subPrice = Number(
      iframeAiagent.contentWindow.product_price.getAttribute("data-subPrice") ??
      details_with_options.base_price,
    );
    const totalEle = summary_panel.querySelector(".total-price");

    if (btn_quantity_value_ele) {
      btn_quantity_value_ele.textContent = quantity;
    }

    if (totalEle) {
      const totalCalc = subPrice * quantity;
      totalEle.textContent = formatCurrencyLocalForSubtotal(
        (totalCalc * infos_currency.conversion_rate).toFixed(
          infos_currency.number_of_decimal,
        ),
        infos_currency,
      );
      totalEle.setAttribute("total_price", totalCalc);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

const addToCartHandler = () => {
  const AllDataProduct = iframeAiagent.contentWindow.AllDataProduct_ai_Agent;
  const section_product_modal_rs =
    iframeAiagent.contentWindow.section_product_modal_rs_ai_agent;
  const summary_panel =
    iframeAiagent.contentWindow.section_product_modal_rs_ai_agent.querySelector(
      ".summary-panel",
    );
  const details_with_options =
    iframeAiagent.contentWindow.AllDataProduct_ai_Agent.details_with_options
      .product;
  const stopeScrollBody = true;
  const SectionMode = "light";
  const TextAligne = "text-left";
  const SectionName = "section-product-modal-rs";

  const groupedAttributes = details_with_options.options_groups.reduce(
    (acc, group) => {
      const groupName = group.group_name;
      if (!acc[groupName]) {
        acc[groupName] = {
          id: group.id,
          min_options: group.min_options,
          max_options: group.max_options,
          options: [],
        };
      }
      group.options.forEach((option) => {
        const attributeData = {
          option_name: option.option_name,
          price: option.price,
          stock: option.stock,
          qty_max: option.qty_max,
          id: option.id,
        };
        acc[groupName].options.push(attributeData);
      });
      return acc;
    },
    {},
  );

  // Fonction de validation des options sélectionnées
  const validateOptionsSelection = () => {
    const validationErrors = [];
    // Parcourir chaque groupe d'options
    Object.keys(groupedAttributes).forEach((groupName) => {
      const group = groupedAttributes[groupName];
      const groupId = group.id;
      const minOptions = group.min_options;
      const maxOptions = group.max_options;
      // Compter les options sélectionnées pour ce groupe
      const selectedOptionsCount =
        iframeAiagent.contentWindow.document.querySelectorAll(
          `.option-group[data-group-id="${groupId}"] div.conatinerOption .active`,
        ).length;
      // Vérifier le minimum requis
      if (selectedOptionsCount < minOptions) {
        validationErrors.push(
          `Groupe "${groupName}": Vous devez sélectionner au minimum ${minOptions} option(s). Actuellement ${selectedOptionsCount} sélectionnée(s).`,
        );
      }
      // Vérifier le maximum autorisé
      if (selectedOptionsCount > maxOptions) {
        validationErrors.push(
          `Groupe "${groupName}": Vous ne pouvez sélectionner que ${maxOptions} option(s) maximum. Actuellement ${selectedOptionsCount} sélectionnée(s).`,
        );
      }
    });
    return validationErrors;
  };

  // Fonction pour récupérer les options sélectionnées
  const getSelectedOptions = () => {
    const selectedOptions = {};
    Object.keys(groupedAttributes).forEach((groupName) => {
      const group = groupedAttributes[groupName];
      const groupId = group.id;
      const selectedElements =
        iframeAiagent.contentWindow.document.querySelectorAll(
          `.option-group[data-group-id="${groupId}"] div.conatinerOption .active`,
        );

      selectedOptions[groupName] = Array.from(selectedElements).map(
        (element) => {
          // Récupérer les données de l'option depuis l'élément ou depuis les données du produit
          const optionId = element.getAttribute("data-option-id") || element.id;
          const optionData = group.options.find(
            (opt) => opt.id.toString() === optionId,
          );
          return {
            id: optionId,
            name: optionData?.option_name || element.textContent?.trim(),
            price: optionData?.price || 0,
            ...(optionData && {
              stock: optionData.stock,
              qty_max: optionData.qty_max,
            }),
          };
        },
      );
    });
    return selectedOptions;
  };

  // Valider les sélections avant d'ajouter au panier
  const validationErrors = validateOptionsSelection();

  // Si il y a des erreurs, retourner un message d'erreur détaillé
  if (validationErrors.length > 0) {
    const errorMessage = validationErrors.join("\n");
    console.log(errorMessage, validationErrors);

    // Message de retour amélioré pour l'AI agent en cas d'erreur
    const errorResponse = {
      action: "ADD_TO_CART_VALIDATION_ERROR",
      success: false,
      message: "Échec de l'ajout au panier - Options non valides",
      errors: validationErrors,
      context: {
        product_name: AllDataProduct?.name || "Produit inconnu",
        current_selections: getSelectedOptions(),
        required_validations: Object.keys(groupedAttributes).map(
          (groupName) => ({
            group_name: groupName,
            min_required: groupedAttributes[groupName].min_options,
            max_allowed: groupedAttributes[groupName].max_options,
            current_count:
              iframeAiagent.contentWindow.document.querySelectorAll(
                `.option-group[data-group-id="${groupedAttributes[groupName].id}"] div.conatinerOption .active`,
              ).length,
          }),
        ),
      },
      timestamp: new Date().toISOString(),
    };

    return JSON.stringify(errorResponse);
  }

  // Si tout est valide, procéder à l'ajout au panier
  const selectedOptions = getSelectedOptions();

  handleAddToCartClick({
    section_product_modal_rs,
    summary_panel,
    groupedAttributes,
    AllDataProduct,
    stopeScrollBody,
    SectionMode,
    TextAligne,
    SectionName,
  });

  // Récupérer les détails de la commande après l'ajout
  const orderDetails = JSON.parse(
    JSON.stringify(iframeAiagent.contentWindow.stateUserAction.productRSObject),
  );

  // Message de retour amélioré pour l'AI agent en cas de succès
  const successResponse = {
    action: "ADD_TO_CART_SUCCESS",
    success: true,
    message: "Produit ajouté au panier avec succès",
    context: {
      product_name: AllDataProduct?.name || "Produit",
      product_id: AllDataProduct?.id || null,
      selected_options: selectedOptions,
      order_details: orderDetails,
      total_price: orderDetails?.total_price || null,
      quantity: orderDetails?.quantity || 1,
      cart_item_id: orderDetails?.cart_item_id || null,
    },
    user_selections: {
      options_selected: selectedOptions,
      total_option_groups: Object.keys(selectedOptions).length,
      validation_passed: true,
    },
    timestamp: new Date().toISOString(),
  };

  return JSON.stringify(successResponse);
};

const checkIfuserIsOnProductPage = () => {
  const currentUrl = window.location.href;
  const productPageRegex = /\/product-details\/[a-zA-Z0-9-]+/;
  const productPageDetailsRegex = /\/product\/[a-zA-Z0-9-]+/;
  return (
    productPageRegex.test(currentUrl) ||
    productPageDetailsRegex.test(currentUrl)
  );
};

async function redirectUser(url) {
  try {
    window.history.pushState({}, "", url);
    // 1. Fermer toute popup existante
    const existingPopup = document.querySelector("#iframe-page-overlay");
    if (existingPopup) {
      existingPopup.style.opacity = "0";
      setTimeout(() => {
        if (existingPopup.parentNode) {
          existingPopup.remove();
        }
      }, 200);
      await new Promise((resolve) => setTimeout(resolve, 250));
    }

    // 2. Vérifier l'accessibilité de l'URL
    const res = await fetch(url, {
      method: "HEAD",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`URL non accessible: HTTP ${res.status}`);
    }

    // 3. Créer l'overlay fullscreen qui remplace la page
    const pageOverlay = document.createElement("div");
    pageOverlay.id = "iframe-page-overlay";
    pageOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 999999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
    // 4. Créer l'iframe qui occupe toute la page
    iframeAiagent = document.createElement("iframe");
    iframeAiagent.src = url;
    iframeAiagent.style.cssText = `
            width: 100%;
            height: 100%;
            border: none;
            background: white;
            display: block;
        `;

    // 5. Loader pendant le chargement
    const loader = document.createElement("div");
    loader.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;

    loader.innerHTML = `
            <div style="
                width: 50px;
                height: 50px;
                border: 3px solid #f3f3f3;
                border-top: 3px solid #4285f4;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></div>
            <div style="
                font-size: 16px;
                font-weight: 500;
                color: #5f6368;
            ">Chargement...</div>
        `;

    // 6. Ajouter l'animation CSS si elle n'existe pas
    if (!document.querySelector("#iframe-spinner")) {
      const style = document.createElement("style");
      style.id = "iframe-spinner";
      style.textContent = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
      document.head.appendChild(style);
    }

    // 7. Fonction pour fermer et revenir à la page originale
    const closePage = () => {
      pageOverlay.style.opacity = "0";
      setTimeout(() => {
        if (pageOverlay.parentNode) {
          pageOverlay.remove();
        }
        // Restaurer la scrollbar
        document.body.style.overflow = "";
      }, 300);
    };

    // 8. Gestion du chargement de l'iframe
    iframeAiagent.onload = () => {
      try {
        // Masquer l'élément chat-buttons-container dans l'iframe
        const iframeDoc =
          iframeAiagent.contentDocument || iframeAiagent.contentWindow.document;
        const chatButtons = iframeDoc.querySelector(".chat-buttons-container");
        if (chatButtons) {
          chatButtons.style.display = "none";
          console.log(
            "✅ Élément .chat-buttons-container masqué dans l'iframe",
          );
        }
      } catch (error) {
        // Erreur CORS - on ne peut pas accéder au contenu de l'iframe
        console.warn(
          "⚠️ Impossible d'accéder au contenu de l'iframe (CORS):",
          error.message,
        );

        // Alternative: injecter du CSS dans l'iframe
        try {
          const style = iframeAiagent.contentDocument.createElement("style");
          style.textContent =
            ".chat-buttons-container { display: none !important; }";
          iframeAiagent.contentDocument.head.appendChild(style);
          console.log("✅ CSS injecté pour masquer .chat-buttons-container");
        } catch (cssError) {
          console.warn("⚠️ Impossible d'injecter le CSS dans l'iframe");
        }
      }

      // Cacher le loader
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => {
          if (loader.parentNode) {
            loader.style.display = "none";
          }
        }, 300);
      }, 500);
    };

    // 9. Gestion des erreurs de l'iframe
    iframeAiagent.onerror = () => {
      loader.innerHTML = `
                <div style="
                    width: 60px;
                    height: 60px;
                    background: #ff4757;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 24px;
                    margin-bottom: 20px;
                ">⚠️</div>
                <div style="
                    font-size: 18px;
                    font-weight: 600;
                    color: #ff4757;
                    margin-bottom: 10px;
                ">Erreur de chargement</div>
                <div style="
                    font-size: 14px;
                    color: #666;
                    margin-bottom: 20px;
                    text-align: center;
                ">Impossible de charger cette page</div>
                <button onclick="this.closest('#iframe-page-overlay').remove(); document.body.style.overflow='';" style="
                    background: #ff4757;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 14px;
                ">Fermer</button>
            `;
    };

    // 10. Event listeners pour fermer
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        closePage();
        document.removeEventListener("keydown", handleKeyPress);
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    // 11. Assemblage et ajout au DOM
    pageOverlay.appendChild(iframeAiagent);
    pageOverlay.appendChild(loader);
    document.body.appendChild(pageOverlay);

    // 12. Masquer la scrollbar du body principal
    document.body.style.overflow = "hidden";

    // 13. Animation d'apparition
    requestAnimationFrame(() => {
      pageOverlay.style.opacity = "1";
    });

    console.log(`✅ Page chargée en remplacement: ${url}`);

    // 14. Retourner une fonction pour fermer manuellement si besoin
    return {
      close: closePage,
      iframe: iframeAiagent,
    };
  } catch (err) {
    console.error("❌ Erreur lors du chargement de la page:", err);

    // Fallback vers nouvel onglet
    const fallback = confirm(
      `Impossible d'ouvrir ${url}.\nOuvrir dans un nouvel onglet ?`,
    );
    if (fallback) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }
}

const test = () => {
  const summary_panel =
    section_product_modal_rs_ai_agent.querySelector(".summary-panel");
  let quantity_value = summary_panel.querySelector(".quantity-value");
  let max_item_on_purchase = quantity_value.getAttribute(
    "data-max_item_on_purchase",
  )
    ? Number(quantity_value.getAttribute("data-max_item_on_purchase"))
    : 1;
  const btn_quantity_value = summary_panel.querySelector(".btn-quantity-value");
  handleQuantityPlus(
    summary_panel,
    max_item_on_purchase,
    btn_quantity_value,
    updateTotal(summary_panel),
  );
};

const productDetailleHandle = async (slug) => {
  try {
    const response = await fetch(
      `/product-details/${slug}?isBuilder=${isBuilder}`,
    );
    if (!response.ok) {
      console.error("Erreur lors du fetch des détails produit");
      return null;
    }
    return await response.json();
  } catch (err) {
    console.error("Erreur dans productDetailleHandle:", err);
    return null;
  }
};

const fetchProductOption = async (slug) => {
  try {
    const res = await fetch(`/product-details-with-options/${slug}`);
    const data = await res.json();

    if (data.success) {
      const detailProduct = await productDetailleHandle(slug); // bien await ici
      return {
        DetailProduct: detailProduct,
        details_with_options: data,
      };
    } else {
      return false;
    }
  } catch (err) {
    console.error("Erreur dans fetchProductOption:", err);
    return false;
  }
};

// Check if LiveKit is loaded, if not wait for it
if (!initializeLiveKit()) {
  let checkCount = 0;
  const checkInterval = setInterval(() => {
    checkCount++;
    if (initializeLiveKit() || checkCount > 50) {
      clearInterval(checkInterval);
      if (checkCount > 50) {
        console.log(
          "live kit are not existe in this store you can add livekit from custom_script",
        );
      }
    }
  }, 100);
}

// Enhanced Voice Agent Integration Class
class VoiceAgentClient {
  constructor() {
    this.room = null;
    this.localAudioTrack = null;
    this.isRecording = false;
    this.isConnected = false;
    this.currentRoom = null;
    this.currentIdentity = null;

    // Default connection settings
    this.wsUrl = "wss://devdatos-05kskls0.livekit.cloud";
    this.tokenEndpoint =
      "https://digest-comparable-dee-housewives.trycloudflare.com/getToken";

    // UI references
    this.voiceStatusDiv = null;
    this.voiceVisualizerDiv = null;
    this.voiceMicButton = null;

    // Transcription settings
    this.enableTranscription = true;
    this.showInterimResults = true;
  }

  setUIReferences(statusDiv, visualizerDiv, micButton) {
    this.voiceStatusDiv = statusDiv;
    this.voiceVisualizerDiv = visualizerDiv;
    this.voiceMicButton = micButton;
  }

  async fetchToken() {
    try {
      this.updateVoiceStatus("Fetching authentication token...");

      let data = document.querySelector("#keyAiAgent").value;
      data = JSON.parse(data);
      console.log(data);
      if (data.token) {
        this.currentRoom = data.room;
        this.currentIdentity = data.identity;
        return data.token;
      } else {
        throw new Error("No token found in response");
      }
    } catch (error) {
      console.log("Token fetch error:", error);
      throw new Error(`Failed to get authentication: ${error.message}`);
    }
  }

  async connect() {
    try {
      this.updateVoiceStatus("Connecting to voice agent...");
      this.voiceVisualizerDiv.classList.add("active");

      const token = await this.fetchToken();

      this.room = new Room({
        token: token,
      });

      this.setupRoomEvents();

      const connectionTimeout = setTimeout(() => {
        if (!this.isConnected) {
          this.disconnect();
          throw new Error("Connection timeout");
        }
      }, 15000);

      await this.room.connect(this.wsUrl, token, {
        autoSubscribe: true,
        maxRetries: 3,
        retryDelayMs: 1000,
      });

      clearTimeout(connectionTimeout);
      this.isConnected = true;
      this.updateVoiceStatus("Connected! Voice and chat ready.");
      this.voiceVisualizerDiv.classList.remove("active");

      return true;
    } catch (error) {
      // console.log('Connection error:', error);
      this.updateVoiceStatus(`Connection failed: ${error.message}`);
      if (this.voiceVisualizerDiv) {
        this.voiceVisualizerDiv.classList.remove("active");
      }
      this.cleanup();
      return false;
    }
  }

  setupRoomEvents() {
    this.room.on(RoomEvent.Connected, () => {
      console.log("Connected to voice agent room");
      this.isConnected = true;
    });

    this.room.on(RoomEvent.Disconnected, (reason) => {
      console.log(`Disconnected from voice agent: ${reason}`);
      this.handleDisconnection();
    });

    this.room.on(RoomEvent.ParticipantConnected, (participant) => {
      console.log(`Voice agent joined: ${participant.identity}`);
      this.updateVoiceStatus("Voice agent is ready! You can speak or type.");
    });

    this.room.on(RoomEvent.ParticipantDisconnected, (participant) => {
      console.log(`Participant left: ${participant.identity}`);
    });

    this.room.on(
      RoomEvent.TrackSubscribed,
      (track, publication, participant) => {
        console.log(
          `Track subscribed: ${track.kind} from ${participant.identity}`,
        );

        if (track instanceof RemoteAudioTrack) {
          const existingAudio = document.querySelector(
            `audio[data-participant="${participant.identity}"]`,
          );
          if (existingAudio) {
            existingAudio.remove();
          }

          const audioElement = track.attach();
          audioElement.autoplay = true;
          audioElement.volume = 1.0;
          audioElement.setAttribute("data-participant", participant.identity);

          audioElement.addEventListener("canplay", () => {
            console.log(`Voice agent audio ready from ${participant.identity}`);
          });

          document.body.appendChild(audioElement);
        }
      },
    );

    this.room.on(
      RoomEvent.TrackUnsubscribed,
      (track, publication, participant) => {
        if (track instanceof RemoteAudioTrack) {
          const audioElement = document.querySelector(
            `audio[data-participant="${participant.identity}"]`,
          );
          if (audioElement) {
            audioElement.pause();
            audioElement.src = "";
            audioElement.remove();
          }
        }
        track.detach();
      },
    );

    // Enhanced data handling for transcription
    this.room.on(
      RoomEvent.DataReceived,
      (payload, participant, kind, topic) => {
        try {
          const message = new TextDecoder().decode(payload);
          console.log(`Data from voice agent: ${message}`);

          try {
            const parsedData = JSON.parse(message);
            this.handleAgentData(parsedData, participant.identity);
          } catch (e) {
            this.handleAgentMessage(message, participant.identity);
          }
        } catch (e) {
          console.log(`Binary data received from ${participant.identity}`);
        }
      },
    );

    this.room.localParticipant.registerRpcMethod(
      "redirectToPage",
      async (data) => {
        const payloadObj = JSON.parse(data.payload);
        const url = payloadObj.url;

        try {
          if (payloadObj && url) {
            redirectUser(url);
            return { success: true };
          } else {
            throw new Error("Invalid URL data");
          }
        } catch (error) {
          throw new RpcError(1, `Could not redirect to URL: ${error.message}`);
        }
      },
    );

    this.room.localParticipant.registerRpcMethod(
      "handleSelectColorBasicProduct",
      async (data) => {
        const payloadObj = JSON.parse(data.payload);
        const id = payloadObj.id;

        try {
          const response = handleSelectColorBasicProduct(id);
          return response;
        } catch (error) {
          throw new RpcError(1, `Could not redirect to URL: ${error.message}`);
        }
      },
    );

    this.room.localParticipant.registerRpcMethod(
      "toggleOptionSelection",
      async (data) => {
        const payloadObj = JSON.parse(data.payload);
        console.log(payloadObj);
        try {
          if (!checkIfuserIsOnProductPage) {
            throw new Error(
              "user are not on product page to give him the option to increase product quantity",
            );
          }
          const response = handleSelectOption(
            parseInt(payloadObj.group_id),
            parseInt(payloadObj.option_id),
            payloadObj.action,
            payloadObj.product_type,
          );
          console.log(response);
          if (!response) {
            throw new Error("can not select or unselect option");
          }
          return response;
        } catch (error) {
          return error;
        }
      },
    );

    this.room.localParticipant.registerRpcMethod("addToCart", async () => {
      try {
        if (!checkIfuserIsOnProductPage) {
          throw new Error(
            "user are not on product page to give him the option to increase product quantity",
          );
        }
        const response = addToCartHandler();
        console.log(response);
        return response;
      } catch (err) {
        return err;
      }
    });

    this.room.localParticipant.registerRpcMethod(
      "increaseProductQuantity",
      async (data) => {
        debugger;
        const payloadObj = JSON.parse(data.payload);
        const product_type = payloadObj.product_type;
        try {
          if (product_type !== "basic") {
            let quantity_value =
              iframeAiagent.contentWindow.section_product_modal_rs_ai_agent.querySelector(
                ".quantity-value",
              );
            let quantity = Number(quantity_value.textContent);
            if (!checkIfuserIsOnProductPage()) {
              throw new Error(
                "user are not on product page to give him the option to increase product quantity",
              );
            }
            increaseQuantity();
            return {
              success: true,
              message: "quantity has been increased",
              oldQuantity: quantity--,
              newQuantity: quantity,
            };
          }

          if (!checkIfuserIsOnProductPage()) {
            throw new Error(
              "user are not on product page to give him the option to increase product quantity",
            );
          }

          return increaseQuantityBasecProduct();
        } catch (err) {
          console.error("Erreur RPC increaseProductQuantity:", err);
          return { success: false, message: err };
        }
      },
    );

    this.room.localParticipant.registerRpcMethod(
      "decreaseProductQuantity",
      async (data) => {
        const payloadObj = JSON.parse(data.payload);
        const product_type = payloadObj.product_type;
        try {
          if (product_type !== "basic") {
            let quantity_value =
              iframeAiagent.contentWindow.section_product_modal_rs_ai_agent.querySelector(
                ".quantity-value",
              );
            let quantity = Number(quantity_value.textContent);
            if (!checkIfuserIsOnProductPage()) {
              throw new Error(
                "user are not on product page to give him the option to decrease product quantity",
              );
            }
            decreaseQuantity();
            return {
              success: true,
              message: "quantity has been decreased",
              oldQuantity: quantity++,
              newQuantity: quantity,
            };
          }
          if (!checkIfuserIsOnProductPage()) {
            throw new Error(
              "user are not on product page to give him the option to decrease product quantity",
            );
          }
          return descreaseQuantityBasecProduct();
        } catch (err) {
          console.error("Erreur RPC increaseProductQuantity:", err);
          return err;
        }
      },
    );

    /**
     * this function does't need any paramater , her only functionnality to return data progresse for a selected product
     * @return Object
     */
    // rpc function
    this.room.localParticipant.registerRpcMethod("syncProductOptions", () => {
      try {
        if (
          typeof iframeAiagent.contentWindow.stateUserAction.productRSObject !==
          "undefined" ||
          Object.keys(
            iframeAiagent.contentWindow.stateUserAction.productRSObject,
          ).length > 0
        ) {
          return JSON.stringify(
            iframeAiagent.contentWindow.stateUserAction.productRSObject,
          );
        } else if (window.location.href.includes("page/products")) {
          return "no option has been selected yet from the user side";
        } else {
          return "test error, stateUserAction.productRSObject is not defined";
        }
      } catch (err) {
        console.error(err);
        return err;
      }
    });

    this.room.localParticipant.registerRpcMethod(
      "showProductPopup",
      async (data) => {
        const payloadObj = JSON.parse(data.payload);
        const slug = payloadObj.slug;
        try {
          const optionProduct = await fetchProductOption(slug);
          if (!optionProduct) {
            return "error to get data product";
          }
          if (document.querySelector(".close-btn")) {
            document.querySelector(".close-btn").click();
          }
          ShowDataProductRs(optionProduct, 20, true, SectionMode, TextPosition);
          return true;
        } catch (err) {
          console.error("Erreur RPC showProductPopup:", err);
          return `error to get data, reason: ${err.message || err}`;
        }
      },
    );

    this.room.localParticipant.registerRpcMethod(
      "getCurrentWebsiteUrl",
      async (data) => {
        try {
          return JSON.stringify({
            url: window.location.href,
            hostname: window.location.hostname,
            pathname: window.location.pathname,
          });
        } catch (error) {
          throw new RpcError(1, "Could not retrieve current website URL");
        }
      },
    );
  }

  handleAgentData(data, fromIdentity) {
    switch (data.type) {
      case "caption":
        // Handle transcription captions
        this.handleTranscriptionCaption(data);
        break;
      case "greeting":
        appendMessage(`${data.message}`, true);
        break;
      case "acknowledgment":
        appendMessage(`${data.message}`, true);
        break;
      case "text":
        appendMessage(`${data.message}`, true);
        break;
      case "status":
        this.updateVoiceStatus(data.message);
        break;
      case "error":
        appendMessage(`Error: ${data.error}`, true, true);
        break;
      default:
        console.log(`Unknown data type from agent: ${data.type}`);
    }
  }

  handleTranscriptionCaption(captionData) {
    const { who, text, final } = captionData;

    if (!text || !text.trim()) return;

    // Always show transcriptions in chat UI regardless of current mode
    if (who === "user") {
      // Get the participant identity who spoke
      const participantIdentity = captionData.participant_identity || "unknown";

      // Use participant-specific ID
      const messageId = `user-transcription-${participantIdentity}`;

      this.updateOrCreateTranscriptionMessage(
        text,
        false,
        final,
        messageId,
        participantIdentity,
      );
    } else if (who === "agent") {
      if (final) {
        appendMessage(text, true);
      }
    }
  }

  updateOrCreateTranscriptionMessage(
    text,
    isBot,
    isFinal,
    messageId,
    participantIdentity,
  ) {
    let existingMessage = document.getElementById(messageId);

    if (!existingMessage) {
      // Create new transcription message
      const chatMessagesDiv = document.getElementById("chat-messages");
      const messageDiv = document.createElement("div");
      messageDiv.className = "message transcription-message";
      messageDiv.id = messageId;
      messageDiv.setAttribute("data-participant", participantIdentity);

      const participantLabel = document.createElement("div");
      participantLabel.className = "participant-label";
      participantLabel.textContent = `User: ${participantIdentity}`;

      const messageContent = document.createElement("div");
      messageContent.className = "user-message transcription";
      if (!isFinal) {
        messageContent.classList.add("interim");
      }
      messageContent.innerHTML = formatMessage(text);

      messageDiv.appendChild(participantLabel);
      messageDiv.appendChild(messageContent);
      chatMessagesDiv.appendChild(messageDiv);
      scrollToBottom();
      existingMessage = messageDiv;
    } else {
      // Update existing message
      const messageContent = existingMessage.querySelector(".user-message");
      messageContent.innerHTML = formatMessage(text);
      if (isFinal) {
        messageContent.classList.remove("interim");
      }
    }

    // Clean up after final transcription
    if (isFinal) {
      setTimeout(() => {
        existingMessage.removeAttribute("id");
        // Remove the participant label after finalization
        const label = existingMessage.querySelector(".participant-label");
        if (label) {
          label.style.display = "none";
        }
      }, 100);
    }
  }

  handleAgentMessage(message, fromIdentity) {
    appendMessage(`${message}`, true);
  }

  async toggleMicrophone() {
    if (!this.isConnected) {
      const connected = await this.connect();
      if (!connected) return;
    }

    try {
      if (!this.isRecording) {
        this.updateVoiceStatus("Requesting microphone access...");

        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        stream.getTracks().forEach((track) => track.stop());

        this.localAudioTrack = await createLocalAudioTrack({
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 48000,
          channelCount: 1,
        });

        await this.room.localParticipant.publishTrack(this.localAudioTrack, {
          name: "microphone",
          source: "microphone",
        });

        this.isRecording = true;
        this.voiceMicButton.classList.add("recording");
        this.updateVoiceStatus("Listening... Speak now");
        this.voiceVisualizerDiv.classList.add("active");
      } else {
        this.updateVoiceStatus("Processing your message...");

        if (this.localAudioTrack) {
          const publication = this.room.localParticipant.getTrackPublication(
            this.localAudioTrack.sid,
          );
          if (publication) {
            await this.room.localParticipant.unpublishTrack(
              this.localAudioTrack,
            );
          }

          this.localAudioTrack.stop();
          this.localAudioTrack = null;
        }

        this.isRecording = false;
        this.voiceMicButton.classList.remove("recording");
        this.voiceVisualizerDiv.classList.remove("active");
        this.updateVoiceStatus("Waiting for response...");
      }
    } catch (error) {
      this.updateVoiceStatus(`Microphone error: ${error.message}`);
      this.resetMicrophoneState();
    }
  }

  resetMicrophoneState() {
    this.isRecording = false;
    if (this.voiceMicButton) {
      this.voiceMicButton.classList.remove("recording");
    }
    if (this.voiceVisualizerDiv) {
      this.voiceVisualizerDiv.classList.remove("active");
    }

    if (this.localAudioTrack) {
      this.localAudioTrack.stop();
      this.localAudioTrack = null;
    }
  }

  async disconnect() {
    try {
      if (this.localAudioTrack) {
        this.localAudioTrack.stop();
        this.localAudioTrack = null;
      }

      const audioElements = document.querySelectorAll(
        "audio[data-participant]",
      );
      audioElements.forEach((audio) => {
        audio.pause();
        audio.src = "";
        audio.remove();
      });

      if (this.room) {
        this.room.removeAllListeners();
        this.room.disconnect();
        this.room = null;
      }
    } catch (error) {
      console.log("Error during disconnection:", error);
    }

    this.handleDisconnection();
  }

  handleDisconnection() {
    this.isConnected = false;
    this.isRecording = false;
    this.resetMicrophoneState();
    this.updateVoiceStatus("Disconnected from voice agent");
  }

  cleanup() {
    if (this.room) {
      try {
        this.room.removeAllListeners();
        this.room.disconnect();
      } catch (error) {
        console.log("Cleanup error:", error);
      }
      this.room = null;
    }

    this.isConnected = false;
    this.resetMicrophoneState();
  }

  updateVoiceStatus(message) {
    if (this.voiceStatusDiv) {
      this.voiceStatusDiv.textContent = message;
    }
  }

  async sendDataMessage(message) {
    if (this.room && this.isConnected) {
      const dataToSend = {
        type: "user_message",
        message: message,
        timestamp: Date.now(),
        source: "client",
      };

      const encoder = new TextEncoder();
      const data = encoder.encode(JSON.stringify(dataToSend));
      await this.room.localParticipant.publishData(data);
      return true;
    }
    return false;
  }
}

// Global variables
let voiceAgent = new VoiceAgentClient();
let currentChatMode = "text";

document.addEventListener("DOMContentLoaded", function () {
  injectStyles();
  createChatButtonsContainer();
  createChatContainer();
  addEventListeners();

  // Auto-connect to voice agent for transcription
  setTimeout(() => {
    voiceAgent.connect();
  }, 1000);
});

function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

            ::-webkit-scrollbar {
                width: 6px;
                background-color: transparent;
            }
            ::-webkit-scrollbar-thumb {
                background-color: rgba(189, 195, 199, 0.5);
                border-radius: 3px;
            }
            ::-webkit-scrollbar-track {
                background-color: transparent;
            }
            .chat-container {
                animation: fadeSlideUp 0.4s ease-out forwards;
            }
            @keyframes fadeSlideUp {
                from {
                    opacity: 0;
                    transform: translateY(100px) scale(0.95);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }
            body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f0f2f5;
                overflow-x: hidden;
                font-size: 15px;
                line-height: 1.5;
                color: #2c3e50;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
.chat-container {
    position: fixed;
    bottom: 100px;
    right: 30px;
    width: 330px;
    max-height: 47vh;
    height: 600px;
    background-color: #f0f2f5;
    border-radius: 28px;
    box-shadow: 10px 10px 20px rgb(0 0 0 / 30%), -10px -10px 20px rgb(125 125 125 / 70%);
    overflow: hidden;
    display: none;
    flex-direction: column;
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0;
    transform: translateY(50px) scale(0.9);
    z-index: 1000000;
}
            .chat-container.show {
                display: flex;
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            .chat-header {
                background: #f0f2f5;
                color: #2c3e50;
                padding: 20px 28px;
                text-align: center;
                position: relative;
                flex-shrink: 0;
                border-bottom: 1px solid rgba(0, 0, 0, 0.04);
                border-top-left-radius: 28px;
                border-top-right-radius: 28px;
                box-shadow: inset 0 -3px 6px rgba(0,0,0,0.03);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .chat-header-content {
                flex-grow: 1;
                text-align: center;
            }
            .chat-header h2 {
                margin: 0;
                font-size: 1.8rem;
                font-weight: 600;
                color: #34495e;
            }
            .paragraph {
                margin: 5px 0 0;
                font-size: 0.9rem;
                color: #7f8c8d;
                font-weight: 400;
            }
            .header-button {
                background: #f0f2f5;
                border: none;
                cursor: pointer;
                padding: 8px;
                border-radius: 50%;
                transition: all 0.2s ease-out;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 3px 3px 6px rgba(174, 174, 192, 0.2),
                            -3px -3px 6px rgba(255, 255, 255, 0.5);
            }
            .header-button .button-icon {
                width: 22px;
                height: 22px;
                fill: #7f8c8d;
                transition: fill 0.2s ease-out;
            }
            .header-button:hover {
                box-shadow: inset 2px 2px 5px rgba(174, 174, 192, 0.1),
                            inset -2px -2px 5px rgba(255, 255, 255, 0.3);
                transform: translateY(1px);
            }
            .header-button:hover .button-icon {
                fill: #34495e;
            }
            .chat-messages {
                padding: 20px;
                flex-grow: 1;
                height: 400px;
                overflow-y: auto;
                background-color: #f8f9fa;
            }
            .message {
                margin-bottom: 18px;
                display: flex;
                flex-direction: column;
                animation: messageFadeIn 0.5s ease forwards;
                opacity: 0;
                transform: translateY(15px);
            }
            @keyframes messageFadeIn {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .user-message, .bot-message {
                padding: 14px 22px;
                border-radius: 22px;
                max-width: 88%;
                font-size: 1rem;
                line-height: 1.6;
                word-wrap: break-word;
                box-shadow: 5px 5px 10px rgba(174, 174, 192, 0.2),
                            -5px -5px 10px rgba(255, 255, 255, 0.5);
                position: relative;
            }
            .user-message {
                background-color: #e6ecf3;
                color: #2c3e50;
                align-self: flex-end;
                border-bottom-right-radius: 8px;
            }
            .bot-message {
                background-color: #ffffff;
                color: #2c3e50;
                align-self: flex-start;
                border-bottom-left-radius: 8px;
            }
            /* Transcription-specific styles */
            .transcription.interim {
                opacity: 0.7;
                font-style: italic;
            }
            .transcription.interim::after {
                content: "...";
                color: #7f8c8d;
            }
            .transcription {
                border-left: 3px solid #6c5ce7;
                background-color: #f8f9ff !important;
            }
            .bot-message.transcription {
                border-left: 3px solid #27ae60;
                background-color: #f0fff4 !important;
            }
            .chat-input {
                padding: 18px 25px;
                border-top: 1px solid rgba(0, 0, 0, 0.04);
                display: flex;
                align-items: flex-end;
                background-color: #f0f2f5;
                flex-shrink: 0;
                border-bottom-left-radius: 28px;
                border-bottom-right-radius: 28px;
                box-shadow: inset 0 3px 6px rgba(0,0,0,0.03);
            }
            .input-field {
                flex: 1;
                padding: 17px 22px;
                border: none;
                border-radius: 25px;
                outline: none;
                font-size: 1rem;
                resize: none;
                max-height: 100px;
                overflow-y: auto;
                background-color: #eef2f5;
                box-shadow: inset 4px 4px 8px rgba(174, 174, 192, 0.2),
                            inset -4px -4px 8px rgba(255, 255, 255, 0.6);
                transition: all 0.2s ease-out;
                color: #2c3e50;
            }
            .input-field::placeholder {
                color: #95a5a6;
            }
            .input-field:focus {
                background-color: #ffffff;
                box-shadow: 4px 4px 8px rgba(174, 174, 192, 0.3),
                            -4px -4px 8px rgba(255, 255, 255, 0.7);
            }
            .send-button {
                background: linear-gradient(145deg, #6c5ce7, #5c4ce2);
                color: #fff;
                border: none;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                cursor: pointer;
                margin-left: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 5px 5px 10px rgba(108, 92, 231, 0.3),
                            -5px -5px 10px rgba(255, 255, 255, 0.3);
                transition: all 0.2s ease-out;
            }
            .send-button .button-icon {
                width: 24px;
                height: 24px;
                fill: #ffffff;
                transition: fill 0.2s ease-out;
            }
            .send-button:hover {
                background: linear-gradient(145deg, #5c4ce2, #6c5ce7);
                box-shadow: 2px 2px 5px rgba(108, 92, 231, 0.2),
                            -2px -2px 5px rgba(255, 255, 255, 0.2);
                transform: translateY(1px);
            }
            .chat-buttons-container {
                position: fixed;
                bottom: 30px;
                right: 30px;
                display: flex;
                flex-direction: row-reverse;
                gap: 15px;
                align-items: flex-end;
                z-index: 1000000;
            }
            .chat-mode-selector {
                background-color: #f0f2f5;
                border-radius: 34px;
                box-shadow: inset 5px 5px 10px rgba(174, 174, 192, 0.2),
                            inset -5px -5px 10px rgba(255, 255, 255, 0.7);
                display: flex;
                align-items: center;
                padding: 5px;
                height: 60px;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 1rem;
                color: #7f8c8d;
                transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            }
            .chat-mode-selector button {
                border: none;
                padding: 15px 25px;
                border-radius: 28px;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 8px;
                color: #7f8c8d;
                background-color: transparent;
            }
            .chat-mode-selector button.active {
                background-color: #2c3e50;
                color: #ffffff;
                box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2),
                            -3px -3px 6px rgba(255, 255, 255, 0.1);
            }
            .chat-mode-selector button:not(.active):hover {
                color: #34495e;
            }
            .chat-mode-selector button .button-icon {
                width: 22px;
                height: 22px;
                fill: #7f8c8d;
                transition: fill 0.3s ease, opacity 0.3s ease;
            }
            .chat-mode-selector button.active .button-icon {
                fill: #ffffff;
                opacity: 1;
            }
            .chat-mode-selector button:not(.active):hover .button-icon {
                fill: #34495e;
            }
            .error-message {
                background-color: #ffebee;
                color: #b71c1c;
                padding: 12px 18px;
                border-radius: 18px;
                max-width: 80%;
                align-self: flex-start;
                box-shadow: 3px 3px 6px rgba(0,0,0,0.1),
                            -3px -3px 6px rgba(255,255,255,0.3);
                font-size: 0.9rem;
            }
            .loading-dots {
                display: flex;
                align-items: center;
                justify-content: center;
                min-width: 45px;
            }
            .loading-dots .dot {
                background-color: #7f8c8d;
                border-radius: 2px;
                margin: 0 3px;
                transform-origin: bottom;
                opacity: 0;
            }
            .typing-indicator .loading-dots .dot {
                width: 4px;
                height: 15px;
                animation: pulse-line 1.2s infinite ease-in-out;
            }
            @keyframes pulse-line {
                0% { transform: scaleY(0); opacity: 0; }
                50% { transform: scaleY(1); opacity: 1; }
                100% { transform: scaleY(0); opacity: 0; }
            }
            .typing-indicator .loading-dots .dot:nth-child(1) { animation-delay: 0s; }
            .typing-indicator .loading-dots .dot:nth-child(2) { animation-delay: 0.2s; }
            .typing-indicator .loading-dots .dot:nth-child(3) { animation-delay: 0.4s; }
            .voice-visualizer.active .dot {
                width: 6px;
                height: 20px;
                background-color: #6c5ce7;
                animation: audio-wave 1.5s infinite ease-in-out;
            }
            @keyframes audio-wave {
                0% { transform: scaleY(0.2); opacity: 0.4; }
                25% { transform: scaleY(1); opacity: 1; }
                50% { transform: scaleY(0.5); opacity: 0.7; }
                75% { transform: scaleY(0.8); opacity: 0.9; }
                100% { transform: scaleY(0.2); opacity: 0.4; }
            }
            .voice-visualizer.active .dot:nth-child(1) { animation-delay: 0s; }
            .voice-visualizer.active .dot:nth-child(2) { animation-delay: 0.1s; }
            .voice-visualizer.active .dot:nth-child(3) { animation-delay: 0.2s; }
            .voice-visualizer.active .dot:nth-child(4) { animation-delay: 0.3s; }
            .voice-visualizer.active .dot:nth-child(5) { animation-delay: 0.4s; }
            .voice-visualizer.active .dot:nth-child(6) { animation-delay: 0.5s; }
            .voice-visualizer.active .dot:nth-child(7) { animation-delay: 0.6s; }
            .voice-chat-ui {
                display: none;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                flex-grow: 1;
                background-color: #f8f9fa;
                padding: 20px;
                text-align: center;
                color: #555;
            }
            .voice-mic-button {
                background: #eef2f5;
                border: none;
                cursor: pointer;
                padding: 20px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 5px 5px 10px rgba(174, 174, 192, 0.3),
                            -5px -5px 10px rgba(255, 255, 255, 0.7);
                transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                margin-bottom: 20px;
            }
            .voice-mic-button:hover {
                box-shadow: inset 3px 3px 7px rgba(174, 174, 192, 0.2),
                            inset -3px -3px 7px rgba(255, 255, 255, 0.5);
                transform: scale(0.98);
            }
            .voice-mic-button.recording {
                background: linear-gradient(145deg, #e75c5c, #e24c4c);
                box-shadow: inset 3px 3px 7px rgba(174, 174, 192, 0.2),
                            inset -3px -3px 7px rgba(255, 255, 255, 0.5);
                transform: scale(0.95);
            }
            .voice-mic-button .button-icon {
                width: 60px;
                height: 60px;
                fill: #7f8c8d;
                transition: fill 0.3s ease;
            }
            .voice-mic-button.recording .button-icon {
                fill: #ffffff;
            }
            .voice-status {
                font-size: 1.2rem;
                font-weight: 500;
                color: #34495e;
                margin-bottom: 30px;
            }
            .connection-status {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 15px;
            }
            .status-indicator {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background-color: #95a5a6;
            }
            .status-indicator.connected {
                background-color: #27ae60;
                animation: pulse-green 2s infinite;
            }
            .status-indicator.connecting {
                background-color: #f39c12;
                animation: pulse-orange 1s infinite;
            }
            .status-indicator.error {
                background-color: #e74c3c;
            }
            @keyframes pulse-green {
                0% { opacity: 1; }
                50% { opacity: 0.5; }
                100% { opacity: 1; }
            }
            @keyframes pulse-orange {
                0% { opacity: 1; }
                50% { opacity: 0.3; }
                100% { opacity: 1; }
            }
            /* Enhanced Chat Mode UI */
            .chat-with-voice {
                position: relative;
            }
            .voice-input-panel {
                background-color: #f8f9fa;
                border-top: 1px solid rgba(0, 0, 0, 0.04);
                padding: 15px 25px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;
            }
            .compact-mic-button {
                background: #eef2f5;
                border: none;
                cursor: pointer;
                padding: 12px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 3px 3px 6px rgba(174, 174, 192, 0.2),
                            -3px -3px 6px rgba(255, 255, 255, 0.5);
                transition: all 0.2s ease-out;
            }
            .compact-mic-button:hover {
                box-shadow: inset 2px 2px 4px rgba(174, 174, 192, 0.1),
                            inset -2px -2px 4px rgba(255, 255, 255, 0.3);
                transform: scale(0.98);
            }
            .compact-mic-button.recording {
                background: linear-gradient(145deg, #e75c5c, #e24c4c);
                box-shadow: inset 2px 2px 4px rgba(174, 174, 192, 0.1),
                            inset -2px -2px 4px rgba(255, 255, 255, 0.3);
            }
            .compact-mic-button .button-icon {
                width: 20px;
                height: 20px;
                fill: #7f8c8d;
                transition: fill 0.2s ease;
            }
            .compact-mic-button.recording .button-icon {
                fill: #ffffff;
            }
            .voice-status-compact {
                font-size: 0.9rem;
                color: #7f8c8d;
                font-weight: 500;
            }
            @media only screen and (max-width: 768px) {
                .chat-container {
                    width: calc(100% - 40px);
                    bottom: 80px;
                    right: 20px;
                    max-height: 85vh;
                    height: 500px;
                    border-radius: 20px;
                }
                .chat-messages {
                    height: 300px;
                    padding: 15px;
                }
                .chat-buttons-container {
                    bottom: 20px;
                    right: 20px;
                    gap: 10px;
                }
                .chat-mode-selector {
                    height: 58px;
                    border-radius: 29px;
                }
                .chat-mode-selector button {
                    padding: 12px 20px;
                    border-radius: 24px;
                    font-size: 0.9rem;
                }
                .chat-mode-selector button .button-icon {
                    width: 20px;
                    height: 20px;
                }
                .user-message, .bot-message {
                    max-width: 95%;
                    font-size: 0.9rem;
                    padding: 10px 15px;
                }
                .chat-input {
                    padding: 10px 15px;
                }
                .input-field {
                    font-size: 0.9rem;
                    padding: 10px 15px;
                }
                .send-button {
                    width: 45px;
                    height: 45px;
                }
                .send-button .button-icon {
                    width: 20px;
                    height: 20px;
                }
                .voice-mic-button {
                    padding: 15px;
                }
                .voice-mic-button .button-icon {
                    width: 50px;
                    height: 50px;
                }
            }
            .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                border: 0;
            }
        `;
  document.head.appendChild(style);
}

function createChatButtonsContainer() {
  const container = document.createElement("div");
  container.className = "chat-buttons-container";
  document.body.appendChild(container);

  const chatModeSelector = document.createElement("div");
  chatModeSelector.className = "chat-mode-selector";
  chatModeSelector.setAttribute("role", "radiogroup");
  chatModeSelector.setAttribute("aria-label", "Select chat mode");

  // VOICE CHAT Button
  const voiceChatButton = document.createElement("button");
  voiceChatButton.setAttribute("type", "button");
  voiceChatButton.setAttribute("role", "radio");
  voiceChatButton.setAttribute("aria-checked", "false");
  voiceChatButton.id = "voice-chat-mode";
  voiceChatButton.innerHTML = `
            <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.91V21H11V17.91C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
            </svg>
            VOICE CHAT
        `;
  voiceChatButton.onclick = function () {
    toggleChat();
    setChatMode("voice");
  };
  chatModeSelector.appendChild(voiceChatButton);

  // CHAT (Text) Button
  const textChatButton = document.createElement("button");
  textChatButton.setAttribute("type", "button");
  textChatButton.setAttribute("role", "radio");
  textChatButton.setAttribute("aria-checked", "true");
  textChatButton.id = "text-chat-mode";
  textChatButton.className = "active";
  textChatButton.innerHTML = `
            <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M6,9H18V11H6M14,14H6V12H14M18,8H6V6H18V8Z" />
            </svg>
            CHAT
        `;
  textChatButton.onclick = function () {
    toggleChat();
    setChatMode("text");
  };
  chatModeSelector.appendChild(textChatButton);

  container.appendChild(chatModeSelector);
}

function setChatMode(mode) {
  const voiceButton = document.getElementById("voice-chat-mode");
  const textButton = document.getElementById("text-chat-mode");
  const chatMessagesDiv = document.getElementById("chat-messages");
  const chatInputDiv = document.getElementById("chat-input");
  const voiceChatUIDiv = document.getElementById("voice-chat-ui");
  const voiceInputPanel = document.getElementById("voice-input-panel");

  currentChatMode = mode;

  if (mode === "voice") {
    voiceButton.classList.add("active");
    voiceButton.setAttribute("aria-checked", "true");
    textButton.classList.remove("active");
    textButton.setAttribute("aria-checked", "false");

    // Show voice UI, hide text input but keep messages visible
    voiceChatUIDiv.style.display = "flex";
    chatMessagesDiv.style.display = "none";
    chatInputDiv.style.display = "none";
    if (voiceInputPanel) voiceInputPanel.style.display = "none";

    // Set up voice agent UI references
    const voiceStatusDiv = document.getElementById("voice-status");
    const voiceVisualizerDiv = document.getElementById("voice-visualizer");
    const voiceMicButton = document.getElementById("voice-mic-button");

    voiceAgent.setUIReferences(
      voiceStatusDiv,
      voiceVisualizerDiv,
      voiceMicButton,
    );

    if (!voiceAgent.isConnected) {
      voiceAgent.updateVoiceStatus("Connecting to voice agent...");
      voiceAgent.connect();
    } else {
      voiceAgent.updateVoiceStatus("Ready! Tap the microphone to speak");
    }
  } else {
    // 'text' mode - Enhanced with voice input
    textButton.classList.add("active");
    textButton.setAttribute("aria-checked", "true");
    voiceButton.classList.remove("active");
    voiceButton.setAttribute("aria-checked", "false");

    // Show chat UI with voice input panel
    chatMessagesDiv.style.display = "block";
    chatInputDiv.style.display = "flex";
    voiceChatUIDiv.style.display = "none";
    if (voiceInputPanel) voiceInputPanel.style.display = "flex";

    scrollToBottom();

    // Keep voice agent connected for transcription
    if (!voiceAgent.isConnected) {
      voiceAgent.connect();
    }
  }
}

function createChatContainer() {
  const chatContainer = document.createElement("div");
  chatContainer.className = "chat-container";
  chatContainer.setAttribute("aria-live", "polite");

  // Header
  const chatHeader = document.createElement("div");
  chatHeader.className = "chat-header";

  const clearHistoryButton = document.createElement("button");
  clearHistoryButton.className = "header-button";
  clearHistoryButton.setAttribute("aria-label", "Clear history");
  clearHistoryButton.onclick = clearChatHistory;
  clearHistoryButton.innerHTML = `
            <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
            </svg>
        `;
  chatHeader.appendChild(clearHistoryButton);

  const chatHeaderContent = document.createElement("div");
  chatHeaderContent.className = "chat-header-content";
  chatHeaderContent.innerHTML = `
            <h2>AI Voice Assistant</h2>
            <p class="paragraph">Voice & Text Enabled</p>
        `;
  chatHeader.appendChild(chatHeaderContent);

  const rightHeaderPlaceholder = document.createElement("div");
  rightHeaderPlaceholder.style.width = "30px";
  chatHeader.appendChild(rightHeaderPlaceholder);

  chatContainer.appendChild(chatHeader);

  // Messages display area
  const chatMessagesDiv = document.createElement("div");
  chatMessagesDiv.className = "chat-messages";
  chatMessagesDiv.id = "chat-messages";
  chatContainer.appendChild(chatMessagesDiv);

  // Voice Chat UI Container (Full Voice Mode)
  const voiceChatUIDiv = document.createElement("div");
  voiceChatUIDiv.className = "voice-chat-ui";
  voiceChatUIDiv.id = "voice-chat-ui";
  voiceChatUIDiv.style.display = "none";

  const connectionStatus = document.createElement("div");
  connectionStatus.className = "connection-status";
  connectionStatus.innerHTML = `
            <div class="status-indicator" id="connection-indicator"></div>
            <span id="connection-text">Not connected</span>
        `;
  voiceChatUIDiv.appendChild(connectionStatus);

  const voiceMicButton = document.createElement("button");
  voiceMicButton.className = "voice-mic-button";
  voiceMicButton.id = "voice-mic-button";
  voiceMicButton.setAttribute("aria-label", "Toggle voice recording");
  voiceMicButton.onclick = () => voiceAgent.toggleMicrophone();
  voiceMicButton.innerHTML = `
            <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.91V21H11V17.91C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
            </svg>
        `;
  voiceChatUIDiv.appendChild(voiceMicButton);

  const voiceStatusDiv = document.createElement("div");
  voiceStatusDiv.className = "voice-status";
  voiceStatusDiv.id = "voice-status";
  voiceStatusDiv.textContent = "Connecting to voice agent...";
  voiceChatUIDiv.appendChild(voiceStatusDiv);

  const voiceVisualizerDiv = document.createElement("div");
  voiceVisualizerDiv.className = "loading-dots voice-visualizer";
  voiceVisualizerDiv.id = "voice-visualizer";
  voiceVisualizerDiv.innerHTML = `
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        `;
  voiceChatUIDiv.appendChild(voiceVisualizerDiv);

  chatContainer.appendChild(voiceChatUIDiv);

  // Enhanced Voice Input Panel (for Text Chat Mode)
  const voiceInputPanel = document.createElement("div");
  voiceInputPanel.className = "voice-input-panel";
  voiceInputPanel.id = "voice-input-panel";
  voiceInputPanel.style.display = "none";

  const compactMicButton = document.createElement("button");
  compactMicButton.className = "compact-mic-button";
  compactMicButton.id = "compact-mic-button";
  compactMicButton.setAttribute("aria-label", "Voice input");
  compactMicButton.onclick = () => voiceAgent.toggleMicrophone();
  compactMicButton.innerHTML = `
            <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.91V21H11V17.91C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
            </svg>
        `;
  voiceInputPanel.appendChild(compactMicButton);

  const voiceStatusCompact = document.createElement("div");
  voiceStatusCompact.className = "voice-status-compact";
  voiceStatusCompact.id = "voice-status-compact";
  voiceStatusCompact.textContent = "Voice ready";
  voiceInputPanel.appendChild(voiceStatusCompact);

  const compactVisualizer = document.createElement("div");
  compactVisualizer.className = "loading-dots voice-visualizer";
  compactVisualizer.id = "compact-visualizer";
  compactVisualizer.innerHTML = `
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        `;
  voiceInputPanel.appendChild(compactVisualizer);

  chatContainer.appendChild(voiceInputPanel);

  // Input and send button
  const chatInputDiv = document.createElement("div");
  chatInputDiv.className = "chat-input";
  chatInputDiv.id = "chat-input";

  const inputField = document.createElement("textarea");
  inputField.className = "input-field";
  inputField.id = "user-input";
  inputField.placeholder = "Type your message or use voice...";
  inputField.setAttribute("aria-label", "Message input area");
  inputField.rows = 1;

  const sendButton = document.createElement("button");
  sendButton.className = "send-button";
  sendButton.setAttribute("aria-label", "Send message");
  sendButton.onclick = sendMessage;
  sendButton.innerHTML = `
            <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
            </svg>
        `;

  chatInputDiv.appendChild(inputField);
  chatInputDiv.appendChild(sendButton);
  chatContainer.appendChild(chatInputDiv);
  document.body.appendChild(chatContainer);
}

function addEventListeners() {
  const inputField = document.getElementById("user-input");
  inputField.addEventListener("input", autoResizeTextarea);
  inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  });
}

function autoResizeTextarea() {
  const textarea = document.getElementById("user-input");
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

function toggleChat() {
  const chatContainer = document.querySelector(".chat-container");
  chatContainer.classList.toggle("show");
  if (chatContainer.classList.contains("show")) {
    document.getElementById("user-input").focus();
    scrollToBottom();
  }
}

function clearChatHistory() {
  if (confirm("Are you sure you want to clear the entire conversation?")) {
    const chatMessagesDiv = document.getElementById("chat-messages");
    chatMessagesDiv.innerHTML = "";
    appendMessage(
      "Conversation cleared. Voice transcription will continue to appear here.",
      true,
    );
  }
}

function appendMessage(message, isBotMessage = false, isError = false) {
  const chatMessagesDiv = document.getElementById("chat-messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = "message";
  const messageContent = document.createElement("div");
  messageContent.className = isError
    ? "error-message"
    : isBotMessage
      ? "bot-message"
      : "user-message";
  messageContent.innerHTML = formatMessage(message);
  messageDiv.appendChild(messageContent);
  chatMessagesDiv.appendChild(messageDiv);
  scrollToBottom();
}

function formatMessage(message) {
  return message
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`(.*?)`/g, "<code>$1</code>")
    .replace(/\n/g, "<br>");
}

function scrollToBottom() {
  const chatMessagesDiv = document.getElementById("chat-messages");
  if (chatMessagesDiv) {
    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
  }
}

function showTypingIndicator() {
  const chatMessagesDiv = document.getElementById("chat-messages");
  const typingIndicator = document.createElement("div");
  typingIndicator.className = "typing-indicator";
  typingIndicator.innerHTML = `
            <div class="loading-dots">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        `;
  chatMessagesDiv.appendChild(typingIndicator);
  scrollToBottom();
  return typingIndicator;
}

function hideTypingIndicator(typingIndicator) {
  if (typingIndicator && typingIndicator.parentNode) {
    typingIndicator.parentNode.removeChild(typingIndicator);
  }
}

function updateConnectionStatus(status, text) {
  const indicator = document.getElementById("connection-indicator");
  const textElement = document.getElementById("connection-text");
  const compactStatus = document.getElementById("voice-status-compact");

  if (indicator && textElement) {
    indicator.classList.remove("connected", "connecting", "error");
    indicator.classList.add(status);
    textElement.textContent = text;
  }

  if (compactStatus) {
    compactStatus.textContent = text;
  }
}

async function sendMessage() {
  const userInputField = document.getElementById("user-input");
  const userInput = userInputField.value.trim();

  if (!userInput) return;

  // Add user message to chat display
  appendMessage(userInput);
  userInputField.value = "";
  autoResizeTextarea();

  // Always try to send via voice agent data channel first
  if (voiceAgent.isConnected) {
    const sent = await voiceAgent.sendDataMessage(userInput);
    if (sent) {
      // Message sent successfully via voice agent
      return;
    }
  }

  // Fallback: Show typing indicator and simulate response
  const typingIndicator = showTypingIndicator();

  setTimeout(() => {
    hideTypingIndicator(typingIndicator);
    appendMessage(
      "Voice agent is not connected. Please connect to get AI responses.",
      true,
      true,
    );
  }, 1500);
}

// Enhanced voice agent status updates
const originalUpdateVoiceStatus = voiceAgent.updateVoiceStatus;
voiceAgent.updateVoiceStatus = function (message) {
  originalUpdateVoiceStatus.call(this, message);

  // Update connection status based on message content
  if (message.includes("Connected") || message.includes("ready")) {
    updateConnectionStatus("connected", "Connected");
  } else if (message.includes("Connecting") || message.includes("Fetching")) {
    updateConnectionStatus("connecting", "Connecting...");
  } else if (message.includes("failed") || message.includes("error")) {
    updateConnectionStatus("error", "Connection failed");
  }

  // Update compact mic button states
  const compactMicButton = document.getElementById("compact-mic-button");
  const compactVisualizer = document.getElementById("compact-visualizer");

  if (compactMicButton && compactVisualizer) {
    if (this.isRecording) {
      compactMicButton.classList.add("recording");
      compactVisualizer.classList.add("active");
    } else {
      compactMicButton.classList.remove("recording");
      compactVisualizer.classList.remove("active");
    }
  }
};

// Configuration helper
function updateVoiceAgentConfig(wsUrl, tokenEndpoint) {
  voiceAgent.wsUrl = wsUrl;
  voiceAgent.tokenEndpoint = tokenEndpoint;
}

/**
 * Success WebM Video Animation Function
 * Affiche votre animation WebM de succès puis la fait disparaître
 */
window.showSuccessWebMAnimation = (
  message = "Operation completed successfully!",
  videoUrl = "https://www.devaito.com/public/js/successAiAgent.webm",
  duration = 2800,
) => {
  // Créer le conteneur principal
  const successContainer = document.createElement("div");
  successContainer.className = "success-webm-container";

  // Créer le HTML de l'animation
  successContainer.innerHTML = `
        <div class="success-webm-overlay">
            <div class="success-webm-card">
                <div class="video-animation-container">
                    <video class="success-webm-video" autoplay muted playsinline>
                        <source src="${videoUrl}" type="video/webm">
                        <!-- Fallback si WebM n'est pas supporté -->
                        <div class="video-fallback">
                            <div class="fallback-animation">
                                <div class="success-icon">✓</div>
                            </div>
                        </div>
                    </video>
                </div>
              </div>
        </div>
    `;

  // Ajouter les styles CSS
  const styles = `
        <style>
        .success-webm-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 10000;
            pointer-events: none;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .success-webm-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            animation: fadeInOverlay 0.5s ease-out forwards;
        }

        .success-webm-card {
        
            border-radius: 25px;
            padding: 40px;
            text-align: center;
            transform: scale(0.8) translateY(30px);
            animation: slideInCard 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
            position: relative;
            overflow: hidden;
            min-width: 350px;
            max-width: 450px;
        }

        .video-animation-container {
            position: relative;
            width: 120px;
            height: 120px;
            margin: 0 auto 30px;
            border-radius: 50%;
            overflow: hidden;
        }

        .success-webm-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .video-overlay-effects {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            pointer-events: none;
        }

        .glow-effect {
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
            animation: pulseGlow 2s ease-in-out infinite;
        }

        .video-fallback {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
        }

        .fallback-animation {
            width: 60px;
            height: 60px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fallbackPulse 1.5s ease-in-out infinite;
        }

        .success-icon {
            font-size: 30px;
            color: #ffffff;
            font-weight: bold;
            animation: iconScale 0.6s ease-out 0.5s both;
        }

        .success-message {
            opacity: 0;
            animation: fadeInMessage 0.6s ease-out 1s forwards;
        }

        .success-title {
            font-size: 28px;
            font-weight: 700;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0 0 15px 0;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .success-text {
            font-size: 16px;
            color: #5a6c7d;
            margin: 0;
            line-height: 1.6;
            max-width: 300px;
            margin: 0 auto;
        }

        .border-shine {
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: 25px;
            background: linear-gradient(45deg,
                transparent 30%,
                rgba(102, 126, 234, 0.5) 50%,
                transparent 70%);
            opacity: 0;
            animation: borderShine 2s ease-in-out 0.5s infinite;
        }

        .success-particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            border-radius: 25px;
            overflow: hidden;
        }

        .particle {
            position: absolute;
            width: 6px;
            height: 6px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 50%;
            opacity: 0;
        }

        .particle-1 { top: 20%; left: 20%; animation: floatParticle 3s ease-out 1.5s forwards; }
        .particle-2 { top: 25%; right: 25%; animation: floatParticle 3s ease-out 1.7s forwards; }
        .particle-3 { top: 60%; left: 15%; animation: floatParticle 3s ease-out 1.9s forwards; }
        .particle-4 { top: 65%; right: 20%; animation: floatParticle 3s ease-out 2.1s forwards; }
        .particle-5 { top: 40%; left: 10%; animation: floatParticle 3s ease-out 2.3s forwards; }
        .particle-6 { top: 45%; right: 15%; animation: floatParticle 3s ease-out 2.5s forwards; }
        .particle-7 { top: 75%; left: 30%; animation: floatParticle 3s ease-out 2.7s forwards; }
        .particle-8 { top: 80%; right: 35%; animation: floatParticle 3s ease-out 2.9s forwards; }

        /* Animations */
        @keyframes fadeInOverlay {
            to { opacity: 1; }
        }

        @keyframes slideInCard {
            to {
                transform: scale(1) translateY(0);
                opacity: 1;
            }
        }

        @keyframes pulseGlow {
            0%, 100% {
                opacity: 0.5;
                transform: scale(1);
            }
            50% {
                opacity: 0.8;
                transform: scale(1.05);
            }
        }

        @keyframes fallbackPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        @keyframes iconScale {
            0% { transform: scale(0) rotate(-180deg); }
            50% { transform: scale(1.2) rotate(0deg); }
            100% { transform: scale(1) rotate(0deg); }
        }

        @keyframes fadeInMessage {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes borderShine {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
        }

        @keyframes floatParticle {
            0% {
                opacity: 0;
                transform: translateY(0) scale(0);
            }
            30% {
                opacity: 1;
                transform: translateY(-20px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-50px) scale(0.3);
            }
        }

        @keyframes hideAnimation {
            0% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
            100% {
                opacity: 0;
                transform: scale(0.9) translateY(-20px);
            }
        }

        /* Animation de sortie */
        .success-webm-card.hiding {
            animation: hideAnimation 0.6s ease-in forwards;
        }

        .success-webm-overlay.hiding {
            animation: fadeInOverlay 0.6s ease-in reverse forwards;
        }

        /* Responsive */
        @media (max-width: 480px) {
            .success-webm-card {
                padding: 30px 20px;
                margin: 20px;
                min-width: auto;
                max-width: calc(100vw - 40px);
            }

            .video-animation-container {
                width: 100px;
                height: 100px;
            }

            .success-title {
                font-size: 24px;
            }

            .success-text {
                font-size: 14px;
            }
        }

        /* Support pour les navigateurs qui ne supportent pas WebM */
        .success-webm-video::-webkit-media-controls {
            display: none !important;
        }

        .success-webm-video::-webkit-media-controls-panel {
            display: none !important;
        }
        </style>
    `;

  // Ajouter les styles au head
  document.head.insertAdjacentHTML("beforeend", styles);

  // Ajouter le conteneur au body
  document.body.appendChild(successContainer);

  // Gestion de la vidéo
  const video = successContainer.querySelector(".success-webm-video");

  // Fonction pour masquer l'animation
  const hideAnimation = () => {
    const overlay = successContainer.querySelector(".success-webm-overlay");
    const card = successContainer.querySelector(".success-webm-card");

    overlay.classList.add("hiding");
    card.classList.add("hiding");

    setTimeout(() => {
      if (successContainer && successContainer.parentNode) {
        successContainer.parentNode.removeChild(successContainer);
      }
    }, 600);
  };

  // Gestion des événements vidéo
  if (video) {
    video.addEventListener("loadeddata", () => {
      console.log("Success video loaded successfully");
    });

    video.addEventListener("error", (e) => {
      console.log("Video failed to load, showing fallback animation");
      video.style.display = "none";
      const fallback = successContainer.querySelector(".video-fallback");
      if (fallback) {
        fallback.style.display = "flex";
      }
    });

    // Relancer la vidéo si elle se termine avant la fin de l'animation
    video.addEventListener("ended", () => {
      if (successContainer.parentNode) {
        video.currentTime = 0;
        video.play().catch((e) => console.log("Video replay failed:", e));
      }
    });
  }

  // Auto-hide après la durée spécifiée
  setTimeout(hideAnimation, duration);

  // Permettre la fermeture manuelle en cliquant sur l'overlay
  successContainer.addEventListener("click", (e) => {
    if (e.target === successContainer.querySelector(".success-webm-overlay")) {
      hideAnimation();
    }
  });

  // Retourner une fonction pour fermer manuellement
  return {
    hide: hideAnimation,
    container: successContainer,
    video: video,
  };
};

// Fonction utilitaire pour différents types de succès avec votre vidéo
const SuccessWebM = {
  // Succès général avec votre vidéo
  show: (message, duration = 4000, customVideoUrl = null) => {
    const videoUrl =
      customVideoUrl || "https://www.devaito.com/public/js/successAiAgent.webm";
    return showSuccessWebMAnimation(message, videoUrl, duration);
  },

  // Succès pour création de compte
  accountCreated: (duration = 4500) => {
    return showSuccessWebMAnimation(
      "Your account has been created successfully!",
      "https://www.devaito.com/public/js/successAiAgent.webm",
      duration,
    );
  },

  // Succès pour sauvegarde
  saved: (duration = 3500) => {
    return showSuccessWebMAnimation(
      "Data saved successfully!",
      "https://www.devaito.com/public/js/successAiAgent.webm",
      duration,
    );
  },

  // Succès pour upload
  uploaded: (duration = 3500) => {
    return showSuccessWebMAnimation(
      "File uploaded successfully!",
      "https://www.devaito.com/public/js/successAiAgent.webm",
      duration,
    );
  },

  // Succès personnalisé avec votre vidéo
  custom: (message, options = {}) => {
    const duration = options.duration || 4000;
    const videoUrl =
      options.videoUrl ||
      "https://www.devaito.com/public/js/successAiAgent.webm";
    return showSuccessWebMAnimation(message, videoUrl, duration);
  },
};
