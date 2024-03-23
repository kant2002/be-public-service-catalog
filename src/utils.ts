import { ArrayRule, ObjectRule, StringRule } from '@kant2002-diia-inhouse/validators'

export default class Utils {
    toObjectValidationRule(props: string[], rule: ObjectRule | ArrayRule | StringRule, optional = true): ObjectRule {
        return props.reduce(
            (acc: ObjectRule, prop: string): ObjectRule => ({
                ...acc,
                props: {
                    ...acc.props,
                    [prop]: rule,
                },
            }),
            {
                type: 'object',
                props: {},
                optional,
            },
        )
    }
}
