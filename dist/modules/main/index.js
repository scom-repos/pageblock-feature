var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@feature/main/config.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.imageStyle = exports.textareaStyle = void 0;
    exports.textareaStyle = components_1.Styles.style({
        $nest: {
            'textarea': {
                border: 'none',
                outline: 'none'
            },
            '.i-upload_preview-img': {
                maxHeight: '100%',
                display: 'block'
            }
        }
    });
    exports.imageStyle = components_1.Styles.style({
        $nest: {
            'i-upload .i-upload_preview-img': {
                maxHeight: '100%',
                display: 'block'
            },
            'i-upload .i-upload-wrapper': {
                maxHeight: 'inherit',
                overflow: 'hidden'
            }
        }
    });
});
define("@feature/main/config.tsx", ["require", "exports", "@ijstech/components", "@feature/main/config.css.ts"], function (require, exports, components_2, config_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let Config = class Config extends components_2.Module {
        constructor() {
            super(...arguments);
            this.itemList = [];
        }
        get data() {
            const _data = {
                title: this.edtTitle.value || "",
                description: this.edtDesc.value || "",
                data: this.itemList || []
            };
            return _data;
        }
        set data(config) {
            this.edtTitle.value = config.title || "";
            this.edtDesc.value = config.description || "";
            console.log(config);
        }
        addItem() {
            const lastIndex = this.itemList.length;
            const itemElm = (this.$render("i-vstack", { gap: '0.5rem', padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' }, border: { width: 1, style: 'solid', color: 'rgba(217,225,232,.38)', radius: 5 } },
                this.$render("i-label", { caption: "Name:" }),
                this.$render("i-input", { width: "100%", onChanged: (source) => this.updateList(source, lastIndex, 'name') }),
                this.$render("i-label", { caption: "Description:" }),
                this.$render("i-input", { class: config_css_1.textareaStyle, width: "100%", height: "auto", resize: "auto-grow", inputType: 'textarea', onChanged: (source) => this.updateList(source, lastIndex, 'caption') }),
                this.$render("i-label", { caption: "Logo:" }),
                this.$render("i-panel", null,
                    this.$render("i-upload", { maxHeight: 200, maxWidth: 200, class: config_css_1.imageStyle, onChanged: (source) => this.updateList(source, lastIndex, 'img') }))));
            this.listStack.appendChild(itemElm);
            this.itemList[lastIndex] = { name: '' };
        }
        updateList(source, index, prop) {
            const item = this.itemList[index] || {};
            if (prop === 'img') {
                const imgUploader = source.getElementsByTagName("img")[0];
                item.img = imgUploader.src || '';
            }
            else {
                item[prop] = source.value;
            }
        }
        init() {
            super.init();
        }
        render() {
            return (this.$render("i-vstack", { id: "pnlConfig", gap: '0.5rem', padding: { top: '1rem', bottom: '1rem', left: '1rem', right: '1rem' } },
                this.$render("i-label", { caption: "Title:" }),
                this.$render("i-input", { id: "edtTitle", width: "100%" }),
                this.$render("i-label", { caption: "Description:" }),
                this.$render("i-input", { id: "edtDesc", class: config_css_1.textareaStyle, width: "100%", height: "auto", resize: "auto-grow", inputType: 'textarea' }),
                this.$render("i-panel", null,
                    this.$render("i-button", { caption: "Add Item", padding: { left: '1rem', right: '1rem', top: '0.5rem', bottom: '0.5rem' }, onClick: this.addItem.bind(this) })),
                this.$render("i-vstack", { id: "listStack", gap: "0.5rem" })));
        }
    };
    Config = __decorate([
        components_2.customModule,
        components_2.customElements("pageblock-card-config")
    ], Config);
    exports.default = Config;
});
define("@feature/main/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.centerStyle = exports.controlStyle = exports.carouselStyle = exports.actionButtonStyle = exports.imageStyle = exports.cardItemStyle = exports.cardStyle = void 0;
    const Theme = components_3.Styles.Theme.ThemeVars;
    exports.cardStyle = components_3.Styles.style({
        $nest: {
            'i-link > a': {
                textDecoration: 'none'
            }
        }
    });
    exports.cardItemStyle = components_3.Styles.style({
        $nest: {
            '&:hover i-button': {
                background: Theme.colors.primary.dark,
                color: Theme.colors.primary.contrastText
            },
            '&:hover i-button > i-icon': {
                fill: '#fff !important'
            }
        }
    });
    exports.imageStyle = components_3.Styles.style({
        $nest: {
            '> img': {
                width: '100%'
            }
        }
    });
    exports.actionButtonStyle = components_3.Styles.style({
        boxShadow: 'none',
        $nest: {
            '&:hover': {
                background: Theme.colors.primary.dark,
                color: Theme.colors.primary.contrastText
            },
            '> i-icon:hover': {
                fill: '#fff !important'
            }
        }
    });
    exports.carouselStyle = components_3.Styles.style({
        $nest: {
            '.dots-pagination': {
                height: 45,
                background: Theme.background.paper,
                borderTop: '1px solid rgba(217,225,232,.38)',
                marginTop: 0,
            },
            '.dots-pagination .--dot > span': {
                minHeight: '0.6rem',
                minWidth: '0.6rem',
            }
        }
    });
    exports.controlStyle = components_3.Styles.style({
        $nest: {
            'i-button': {
                boxShadow: 'none',
            },
            'i-button > span': {
                display: 'none'
            },
            'i-button:not(.disabled):hover': {
                background: 'transparent',
                boxShadow: 'none',
                borderColor: 'rgba(117,124,131,.68)',
                $nest: {
                    '> i-icon': {
                        fill: 'rgba(117,124,131,.68) !important'
                    }
                }
            }
        }
    });
    exports.centerStyle = components_3.Styles.style({
        textAlign: 'center'
    });
});
define("@feature/main/data.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@feature/main/data.json.ts'/> 
    const dataList = [
        {
            name: 'Feature 1',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan convallis ex, dapibus molestie erat pharetra id',
            img: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            name: 'Feature 2',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan convallis ex, dapibus molestie erat pharetra id',
            img: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            name: 'Feature 3',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan convallis ex, dapibus molestie erat pharetra id',
            img: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            name: 'Feature 4',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan convallis ex, dapibus molestie erat pharetra id',
            img: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        }
    ];
    exports.default = dataList;
});
define("@feature/main", ["require", "exports", "@ijstech/components", "@feature/main/config.tsx", "@feature/main/index.css.ts", "@feature/main/data.json.ts", "@feature/assets"], function (require, exports, components_4, config_1, index_css_1, data_json_1, assets_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Config = void 0;
    exports.Config = config_1.default;
    const Theme = components_4.Styles.Theme.ThemeVars;
    let Main = class Main extends components_4.Module {
        constructor() {
            super(...arguments);
            this._data = {};
            this.defaultEdit = true;
        }
        getData() {
            return this._data;
        }
        async setData(data) {
            this._data = data;
            this.cardConfig.data = data;
            this.onUpdateBlock();
        }
        getTag() {
            return this.tag;
        }
        async setTag(value) {
            this.tag = value;
        }
        async edit() {
            this.cardConfig.data = this._data;
            this.pnlCard.visible = false;
            this.cardConfig.visible = true;
        }
        async confirm() {
            this._data = this.cardConfig.data;
            this.onUpdateBlock();
            this.pnlCard.visible = true;
            this.cardConfig.visible = false;
        }
        async discard() {
            this.pnlCard.visible = true;
            this.cardConfig.visible = false;
        }
        async config() { }
        onUpdateBlock() {
            var _a;
            this.lblTitle.caption = this._data.title || '';
            this.lblDesc.caption = this._data.description || '';
            const data = ((_a = this._data.data) === null || _a === void 0 ? void 0 : _a.length) ? this._data.data : data_json_1.default;
            this.renderList(data);
        }
        renderList(dataList) {
            this.pnlCardBody.clearInnerHTML();
            const lytItems = (this.$render("i-card-layout", { width: '100%', padding: { bottom: '1rem', left: '1rem', right: '1rem' }, gap: { column: '1rem', row: '0.75rem' }, columnsPerRow: 3, cardMinWidth: '250px' }));
            this.pnlCardBody.appendChild(lytItems);
            dataList.forEach((product) => {
                lytItems.append(this.$render("i-grid-layout", { width: '100%', height: '100%', class: index_css_1.cardItemStyle, gap: { column: '1rem', row: '2rem' }, templateAreas: [['areaImg'], ['areaDetails']] },
                    this.$render("i-image", { class: index_css_1.imageStyle, width: 'auto', maxHeight: 100, padding: { top: '1rem', left: '1rem', right: '1rem' }, overflow: 'hidden', grid: { area: 'areaImg' }, url: product.img, fallbackUrl: assets_1.default.fullPath('img/placeholder.jpg') }),
                    this.$render("i-vstack", { gap: '0.5rem', grid: { area: 'areaDetails' }, padding: { left: '1rem', right: '1rem' }, class: index_css_1.centerStyle },
                        this.$render("i-label", { caption: product.name, font: { weight: 600, size: '1.125rem' } }),
                        this.$render("i-label", { caption: product.caption }))));
            });
        }
        render() {
            return (this.$render("i-panel", { id: 'pnlBlock', class: index_css_1.cardStyle },
                this.$render("i-panel", { id: 'pnlCard' },
                    this.$render("i-hstack", { id: 'pnlCardHeader', verticalAlignment: 'center', horizontalAlignment: 'center', padding: {
                            top: '1.5rem',
                            bottom: '1.5rem',
                            left: '1.5rem',
                            right: '1.5rem',
                        } },
                        this.$render("i-vstack", { gap: '0.5rem', class: index_css_1.centerStyle, width: '100%' },
                            this.$render("i-label", { id: 'lblTitle', font: { size: '1.5rem', weight: 600 } }),
                            this.$render("i-label", { id: 'lblDesc', font: { size: '0.875rem', color: Theme.colors.secondary.main } })),
                        this.$render("i-hstack", { id: 'pnlControls', class: index_css_1.controlStyle, gap: '0.5rem' })),
                    this.$render("i-panel", { id: 'pnlCardBody' }),
                    this.$render("i-panel", { id: 'pnlCardFooter' })),
                this.$render("pageblock-card-config", { id: 'cardConfig', visible: false })));
        }
    };
    Main = __decorate([
        components_4.customModule
    ], Main);
    exports.default = Main;
});
