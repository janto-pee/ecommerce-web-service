
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateAddressInput {
    city?: Nullable<string>;
    country?: Nullable<string>;
    country_code?: Nullable<string>;
    location?: Nullable<string>;
    postal_code?: Nullable<string>;
    state_province_code?: Nullable<string>;
    state_province_name?: Nullable<string>;
    street?: Nullable<string>;
    street2?: Nullable<string>;
}

export interface CreateAttributeInput {
    description?: Nullable<string>;
    mandatory?: Nullable<string>;
    name?: Nullable<string>;
    translatable?: Nullable<string>;
    type?: Nullable<string>;
    value?: Nullable<string>;
    variation?: Nullable<string>;
}

export interface CreateBrandInput {
    code?: Nullable<number>;
    name?: Nullable<string>;
}

export interface CreateCategoryInput {
    code?: Nullable<number>;
    description?: Nullable<string>;
    name?: Nullable<string>;
}

export interface CreateCustomerInput {
    department?: Nullable<string>;
    photoURL?: Nullable<string>;
    title?: Nullable<string>;
    user?: Nullable<number>;
    username?: Nullable<string>;
}

export interface CreateImageInput {
    primary?: Nullable<boolean>;
    url?: Nullable<string>;
}

export interface CreateOrderInput {
    businessClientCode?: Nullable<string>;
    comment?: Nullable<string>;
    product?: Nullable<number>;
    shippingDate?: Nullable<string>;
    shop?: Nullable<number>;
}

export interface CreatePaymentInput {
    exampleField?: Nullable<number>;
    id?: Nullable<number>;
}

export interface CreateProductInput {
    attribute?: Nullable<number>;
    barcode?: Nullable<string>;
    brand?: Nullable<number>;
    category?: Nullable<number>;
    description?: Nullable<string>;
    image?: Nullable<number>;
    name?: Nullable<string>;
    parentSku?: Nullable<string>;
    price?: Nullable<string>;
    sellerSku?: Nullable<string>;
    shop?: Nullable<number>;
    stock?: Nullable<string>;
    variant?: Nullable<number>;
}

export interface CreateReviewInput {
    customer?: Nullable<number>;
    payment?: Nullable<number>;
    product?: Nullable<number>;
    ratings?: Nullable<number>;
    reviewText?: Nullable<string>;
}

export interface CreateShippingInput {
    TrackingCode?: Nullable<string>;
    name?: Nullable<string>;
}

export interface CreateShopInput {
    email?: Nullable<string>;
    name?: Nullable<string>;
}

export interface CreateStaffInput {
    department?: Nullable<string>;
    photoURL?: Nullable<string>;
    title?: Nullable<string>;
    user?: Nullable<number>;
    username?: Nullable<string>;
}

export interface CreateTagInput {
    icon?: Nullable<string>;
    name?: Nullable<string>;
}

export interface CreateUserInput {
    email?: Nullable<string>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    password?: Nullable<string>;
    username?: Nullable<string>;
}

export interface CreateVariantInput {
    icon?: Nullable<string>;
    name?: Nullable<string>;
}

export interface UpdateAddressInput {
    city?: Nullable<string>;
    country?: Nullable<string>;
    country_code?: Nullable<string>;
    id: string;
    location?: Nullable<string>;
    postal_code?: Nullable<string>;
    state_province_code?: Nullable<string>;
    state_province_name?: Nullable<string>;
    street?: Nullable<string>;
    street2?: Nullable<string>;
}

export interface UpdateAttributeInput {
    description?: Nullable<string>;
    id: string;
    mandatory?: Nullable<string>;
    name?: Nullable<string>;
    translatable?: Nullable<string>;
    type?: Nullable<string>;
    value?: Nullable<string>;
    variation?: Nullable<string>;
}

export interface UpdateBrandInput {
    code?: Nullable<number>;
    id: string;
    name?: Nullable<string>;
}

export interface UpdateCategoryInput {
    code?: Nullable<number>;
    description?: Nullable<string>;
    id: string;
    name?: Nullable<string>;
}

export interface UpdateCustomerInput {
    department?: Nullable<string>;
    id: string;
    photoURL?: Nullable<string>;
    title?: Nullable<string>;
    user?: Nullable<number>;
    username?: Nullable<string>;
}

export interface UpdateImageInput {
    id: string;
    primary?: Nullable<boolean>;
    url?: Nullable<string>;
}

export interface UpdateOrderInput {
    businessClientCode?: Nullable<string>;
    comment?: Nullable<string>;
    id: string;
    product?: Nullable<string>;
    shippingDate?: Nullable<string>;
    shopId?: Nullable<string>;
}

export interface UpdatePaymentInput {
    id: string;
}

export interface UpdateProductInput {
    attribute?: Nullable<number>;
    barcode?: Nullable<string>;
    brand?: Nullable<number>;
    category?: Nullable<number>;
    description?: Nullable<string>;
    id: string;
    image?: Nullable<number>;
    name?: Nullable<string>;
    parentSku?: Nullable<string>;
    price?: Nullable<string>;
    sellerSku?: Nullable<string>;
    shop?: Nullable<number>;
    stock?: Nullable<string>;
    variant?: Nullable<number>;
}

export interface UpdateReviewInput {
    customer?: Nullable<number>;
    id: string;
    payment?: Nullable<number>;
    product?: Nullable<number>;
    ratings?: Nullable<number>;
    reviewText?: Nullable<string>;
}

export interface UpdateSessionInput {
    id: string;
}

export interface UpdateShippingInput {
    TrackingCode?: Nullable<string>;
    id: string;
    name?: Nullable<string>;
}

export interface UpdateShopInput {
    email?: Nullable<string>;
    id: string;
    name?: Nullable<string>;
}

export interface UpdateStaffInput {
    department?: Nullable<string>;
    id: string;
    photoURL?: Nullable<string>;
    title?: Nullable<string>;
    user?: Nullable<number>;
    username?: Nullable<string>;
}

export interface UpdateTagInput {
    icon?: Nullable<string>;
    id: string;
    name?: Nullable<string>;
}

export interface UpdateUserInput {
    email?: Nullable<string>;
    first_name?: Nullable<string>;
    id: string;
    last_name?: Nullable<string>;
    password?: Nullable<string>;
    username?: Nullable<string>;
}

export interface UpdateVariantInput {
    icon?: Nullable<string>;
    id: string;
    name?: Nullable<string>;
}

export interface ValidateUserInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface Address {
    city?: Nullable<string>;
    country?: Nullable<string>;
    country_code?: Nullable<string>;
    id?: Nullable<number>;
    location?: Nullable<string>;
    postal_code?: Nullable<string>;
    state_province_code?: Nullable<string>;
    state_province_name?: Nullable<string>;
    street?: Nullable<string>;
    street2?: Nullable<string>;
    user?: Nullable<User>;
}

export interface Attribute {
    description?: Nullable<string>;
    id?: Nullable<number>;
    mandatory?: Nullable<string>;
    name?: Nullable<string>;
    translatable?: Nullable<string>;
    type?: Nullable<string>;
    value?: Nullable<string>;
    variation?: Nullable<string>;
}

export interface Brand {
    code?: Nullable<number>;
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export interface Category {
    code?: Nullable<number>;
    description?: Nullable<string>;
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export interface Customer {
    created_at?: Nullable<string>;
    department?: Nullable<string>;
    id?: Nullable<number>;
    photoURL?: Nullable<string>;
    title?: Nullable<string>;
    updated_at?: Nullable<string>;
    user?: Nullable<User>;
    username?: Nullable<string>;
}

export interface Image {
    primary?: Nullable<boolean>;
    url?: Nullable<string>;
}

export interface IMutation {
    createAddress(createAddressInput: CreateAddressInput): Address | Promise<Address>;
    createAttribute(createAttributeInput: CreateAttributeInput): Attribute | Promise<Attribute>;
    createBrand(createBrandInput: CreateBrandInput): Brand | Promise<Brand>;
    createCategory(createCategoryInput: CreateCategoryInput): Category | Promise<Category>;
    createCustomer(createCustomerInput: CreateCustomerInput): Customer | Promise<Customer>;
    createImage(createImageInput: CreateImageInput): Image | Promise<Image>;
    createOrder(createOrderInput: CreateOrderInput): Order | Promise<Order>;
    createPayment(createPaymentInput: CreatePaymentInput): Payment | Promise<Payment>;
    createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;
    createReview(createReviewInput: CreateReviewInput): Review | Promise<Review>;
    createSession(validateUserInput: ValidateUserInput): Token | Promise<Token>;
    createShipping(createShippingInput: CreateShippingInput): Shipping | Promise<Shipping>;
    createShop(createShopInput: CreateShopInput): Shop | Promise<Shop>;
    createStaff(createStaffInput: CreateStaffInput): Staff | Promise<Staff>;
    createTag(createTagInput: CreateTagInput): Tag | Promise<Tag>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    createVariant(createVariantInput: CreateVariantInput): Variant | Promise<Variant>;
    forgotPassword(email?: Nullable<string>): ForgotPasswordResponse | Promise<ForgotPasswordResponse>;
    removeAddress(id: string): Nullable<Address> | Promise<Nullable<Address>>;
    removeAttribute(id: string): Nullable<Attribute> | Promise<Nullable<Attribute>>;
    removeBrand(id: string): Nullable<Brand> | Promise<Nullable<Brand>>;
    removeCategory(id: string): Nullable<Category> | Promise<Nullable<Category>>;
    removeCustomer(id: string): Nullable<Customer> | Promise<Nullable<Customer>>;
    removeImage(id: string): Nullable<Image> | Promise<Nullable<Image>>;
    removeOrder(id: string): Nullable<Order> | Promise<Nullable<Order>>;
    removePayment(id: string): Nullable<Payment> | Promise<Nullable<Payment>>;
    removeProduct(id: string): Nullable<Product> | Promise<Nullable<Product>>;
    removeReview(id: string): Nullable<Review> | Promise<Nullable<Review>>;
    removeShipping(id: string): Nullable<Shipping> | Promise<Nullable<Shipping>>;
    removeShop(id: string): Nullable<Shop> | Promise<Nullable<Shop>>;
    removeStaff(id: string): Nullable<Staff> | Promise<Nullable<Staff>>;
    removeTag(id: string): Nullable<Tag> | Promise<Nullable<Tag>>;
    removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
    removeVariant(id: string): Nullable<Variant> | Promise<Nullable<Variant>>;
    resetPassword(id: string, password?: Nullable<string>, resetcode?: Nullable<string>): User | Promise<User>;
    updateAddress(updateAddressInput: UpdateAddressInput): Address | Promise<Address>;
    updateAttribute(updateAttributeInput: UpdateAttributeInput): Attribute | Promise<Attribute>;
    updateBrand(updateBrandInput: UpdateBrandInput): Brand | Promise<Brand>;
    updateCategory(updateCategoryInput: UpdateCategoryInput): Category | Promise<Category>;
    updateCustomer(updateCustomerInput: UpdateCustomerInput): Customer | Promise<Customer>;
    updateImage(updateImageInput: UpdateImageInput): Image | Promise<Image>;
    updateOrder(updateOrderInput: UpdateOrderInput): Order | Promise<Order>;
    updatePayment(updatePaymentInput: UpdatePaymentInput): Payment | Promise<Payment>;
    updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;
    updateReview(updateReviewInput: UpdateReviewInput): Review | Promise<Review>;
    updateSession(): Nullable<TokenResponse> | Promise<Nullable<TokenResponse>>;
    updateShipping(updateShippingInput: UpdateShippingInput): Shipping | Promise<Shipping>;
    updateShop(updateShopInput: UpdateShopInput): Shop | Promise<Shop>;
    updateStaff(updateStaffInput: UpdateStaffInput): Staff | Promise<Staff>;
    updateTag(updateTagInput: UpdateTagInput): Tag | Promise<Tag>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    updateVariant(updateVariantInput: UpdateVariantInput): Variant | Promise<Variant>;
    verifyUser(id: string, verification?: Nullable<string>): User | Promise<User>;
}

export interface Order {
    businessClientCode?: Nullable<string>;
    comment?: Nullable<string>;
    id?: Nullable<number>;
    product?: Nullable<Product>;
    shippingDate?: Nullable<string>;
    shop?: Nullable<Shop>;
}

export interface Payment {
    exampleField?: Nullable<number>;
    id?: Nullable<number>;
}

export interface Product {
    attribute?: Nullable<Attribute>;
    barcode?: Nullable<string>;
    brand?: Nullable<Brand>;
    category?: Nullable<Category>;
    description?: Nullable<string>;
    id?: Nullable<number>;
    image?: Nullable<Image>;
    name?: Nullable<string>;
    parentSku?: Nullable<string>;
    price?: Nullable<string>;
    sellerSku?: Nullable<string>;
    shop?: Nullable<Shop>;
    stock?: Nullable<string>;
    variant?: Nullable<Variant>;
}

export interface IQuery {
    address(id: string): Nullable<Address> | Promise<Nullable<Address>>;
    addresses(): Nullable<Address>[] | Promise<Nullable<Address>[]>;
    attribute(id: string): Nullable<Attribute> | Promise<Nullable<Attribute>>;
    attributes(): Nullable<Attribute>[] | Promise<Nullable<Attribute>[]>;
    brand(id: string): Nullable<Brand> | Promise<Nullable<Brand>>;
    brands(): Nullable<Brand>[] | Promise<Nullable<Brand>[]>;
    category(id: string): Nullable<Category> | Promise<Nullable<Category>>;
    categorys(): Nullable<Category>[] | Promise<Nullable<Category>[]>;
    customer(id: string): Nullable<Customer> | Promise<Nullable<Customer>>;
    customers(): Nullable<Customer>[] | Promise<Nullable<Customer>[]>;
    image(id: string): Nullable<Image> | Promise<Nullable<Image>>;
    images(): Nullable<Image>[] | Promise<Nullable<Image>[]>;
    me(): Nullable<User> | Promise<Nullable<User>>;
    order(id: string): Nullable<Order> | Promise<Nullable<Order>>;
    orders(): Nullable<Order>[] | Promise<Nullable<Order>[]>;
    payment(id: string): Nullable<Payment> | Promise<Nullable<Payment>>;
    payments(): Nullable<Payment>[] | Promise<Nullable<Payment>[]>;
    product(id: string): Nullable<Product> | Promise<Nullable<Product>>;
    products(): Nullable<Product>[] | Promise<Nullable<Product>[]>;
    review(id: string): Nullable<Review> | Promise<Nullable<Review>>;
    reviews(): Nullable<Review>[] | Promise<Nullable<Review>[]>;
    session(): Nullable<TokenResponse> | Promise<Nullable<TokenResponse>>;
    shipping(id: string): Nullable<Shipping> | Promise<Nullable<Shipping>>;
    shippings(): Nullable<Shipping>[] | Promise<Nullable<Shipping>[]>;
    shop(id: string): Nullable<Shop> | Promise<Nullable<Shop>>;
    shops(): Nullable<Shop>[] | Promise<Nullable<Shop>[]>;
    staff(id: string): Nullable<Staff> | Promise<Nullable<Staff>>;
    staffs(): Nullable<Staff>[] | Promise<Nullable<Staff>[]>;
    tag(id: string): Nullable<Tag> | Promise<Nullable<Tag>>;
    tags(): Nullable<Tag>[] | Promise<Nullable<Tag>[]>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    variant(id: string): Nullable<Variant> | Promise<Nullable<Variant>>;
    variants(): Nullable<Variant>[] | Promise<Nullable<Variant>[]>;
}

export interface Review {
    createdAt?: Nullable<string>;
    customer?: Nullable<Customer>;
    id?: Nullable<number>;
    payment?: Nullable<Payment>;
    product?: Nullable<Product>;
    ratings?: Nullable<number>;
    reviewText?: Nullable<string>;
}

export interface Session {
    id?: Nullable<number>;
    userAgent?: Nullable<string>;
    valid?: Nullable<boolean>;
}

export interface Shipping {
    TrackingCode?: Nullable<string>;
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export interface Shop {
    email?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
}

export interface Staff {
    created_at?: Nullable<string>;
    department?: Nullable<string>;
    id?: Nullable<number>;
    photoURL?: Nullable<string>;
    title?: Nullable<string>;
    updated_at?: Nullable<string>;
    user?: Nullable<User>;
}

export interface Tag {
    icon?: Nullable<string>;
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export interface User {
    createdAt?: Nullable<string>;
    email?: Nullable<string>;
    first_name?: Nullable<string>;
    id: string;
    last_name?: Nullable<string>;
    updatedAt?: Nullable<string>;
    username?: Nullable<string>;
}

export interface Variant {
    icon?: Nullable<string>;
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export interface ForgotPasswordResponse {
    email?: Nullable<string>;
    message?: Nullable<string>;
}

export interface Token {
    accessToken?: Nullable<string>;
    refreshToken?: Nullable<string>;
    session?: Nullable<Session>;
}

export interface TokenResponse {
    session: string;
    user: string;
}

type Nullable<T> = T | null;
