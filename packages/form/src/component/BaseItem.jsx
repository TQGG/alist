import React from 'react';
import { ANY_CHANGE } from '../static';

class BaseItem extends React.Component {
    constructor(props) {
        super(props);

        const { form, name } = props;
        this.form = form;
        this.name = name;
    }

    componentDidMount() {
        this.form.on(ANY_CHANGE, this.update);
        this.didMount = true;
    }

    componentWillUnmount() { // 解绑
        this.form.removeListener(ANY_CHANGE, this.update);
        this.didMount = false;
    }

    update = (type, name, value, payload) => {
        const { silent = false } = payload || {};
        if (['value', 'props'].indexOf(type) !== -1 &&
            this.didMount &&
            this.name === name && !silent) {

            this.forceUpdate();
        }
    }
    render() {
        const {
            children, render, didMount,
            form, onChange, onBlur, onFocus,
            name, formProps, inset, predictChildForm,
            eventProps = {},
        } = this.props;

        if (render) {
            if (!didMount) {
                return null;
            }
            const values = form.getValue();
            return render(values, form, { value, onChange });
        }

        const itemProps = {
            value: form.getItemValue(name),
            status: form.getItemStatus(name),
            error: form.getItemError(name),
        };

        const { status } = itemProps;
        if (didMount && status === 'hidden') {
            return null;
        }

        if (typeof children === 'string') {
            throw new Error('string is not allowed as Item/FormItem\'s children.');
        }

        let component = null;
        if (children === null) {
            return null;
        }

        const props = form.getItemProps(name);
        const {
            className, label,
            top, prefix, suffix, help,
            validateConfig,
            full, layout,
            when,
            ...others
        } = props || {};

        let comboFormProps = { ...formProps };        
        component = React.Children.only(this.props.children);
        if (predictChildForm) {
            comboFormProps = { ...comboFormProps, ...component.props };
        }

        const cloneProps = {
            ...eventProps,
            ...comboFormProps,
            inset,
            // disabled: status === 'disabled',
            name,
            ...itemProps,
            onChange,
            onBlur,
            onFocus,
            ...others,
        };

        if (status === 'disabled') {
            cloneProps.disabled = true;
        }

        if (component && component.type && component.type.displayName === 'If') {
            delete cloneProps.name;
        }

        delete cloneProps.defaultMinWidth;
        delete cloneProps.colon;

        return React.cloneElement(component, cloneProps);
    }
}

export default BaseItem;
