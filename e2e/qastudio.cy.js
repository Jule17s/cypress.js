describe('Оформление покупки', function () {

    it('Открыть карточку товара «БРОММС Двухместная кровать»', function () {
       cy.visit('https://test.qa.studio/');
       
       cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').should('be.visible');
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();

       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').should('be.visible');
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();

       cy.get('.cart-panel-content > .modal-header > .modal-title').should('be.visible');
       cy.contains('Ваша Корзина').should('be.visible');
       cy.get('#cart-modal > .off-modal-layer').click();

       cy.get('[href="https://test.qa.studio"]').click();

       cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();

       cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
       cy.get('.header-right-items > .header-cart').click();
       cy.get('.checkout').click();
       cy.get('#billing_first_name').type('Jane');
       cy.get('#billing_last_name').type('Smith');
       cy.get('#select2-billing_country-container').click();
       cy.get('li.select2-results__option').contains('Россия').click();

       cy.get('#billing_address_1').should('be.visible');
       cy.get('#billing_address_1').type('Ленина 3');

       cy.get('#billing_city').type('Москва');
       cy.get('#billing_state').type('Москва');
       cy.get('#billing_postcode').type('124460');
       cy.get('#billing_phone').type('896481145845');
       cy.get('#billing_email').type('qa@qa.qa');

       cy.get('.woocommerce-form__label > span').click();
       cy.get('#shipping_first_name').type('Анна');
       cy.get('#shipping_last_name').type('Иванова');
       cy.get('#select2-shipping_country-container').click();
       cy.get('li.select2-results__option').contains('Россия').click();
       cy.get('#shipping_address_1').type('Строителей 5');
       cy.get('#shipping_city').type('Самара');
       cy.get('#shipping_state').type('Самара');
       cy.get('#shipping_postcode').type('0124365');


       cy.get('#place_order').should('be.enabled');
       cy.get('#place_order').click();

       cy.get('.page-header__title').should('be.visible');
       cy.contains('Ваш заказ принят. Благодарим вас.').should('be.visible');
       

       })


        })