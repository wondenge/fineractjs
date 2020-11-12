

import ApiClient from '../ApiClient';

/**
 * The FinancialActivityData model module.
 * @module model/FinancialActivityData
 * @version 1.0
 */
class FinancialActivityData {
    /**
     * Constructs a new <code>FinancialActivityData</code>.
     * @alias module:model/FinancialActivityData
     */
    constructor() { 
        
        FinancialActivityData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FinancialActivityData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FinancialActivityData} obj Optional instance to populate.
     * @return {module:model/FinancialActivityData} The populated <code>FinancialActivityData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FinancialActivityData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('mappedGLAccountType')) {
                obj['mappedGLAccountType'] = ApiClient.convertToType(data['mappedGLAccountType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
FinancialActivityData.prototype['id'] = undefined;

/**
 * @member {String} name
 */
FinancialActivityData.prototype['name'] = undefined;

/**
 * @member {module:model/FinancialActivityData.MappedGLAccountTypeEnum} mappedGLAccountType
 */
FinancialActivityData.prototype['mappedGLAccountType'] = undefined;





/**
 * Allowed values for the <code>mappedGLAccountType</code> property.
 * @enum {String}
 * @readonly
 */
FinancialActivityData['MappedGLAccountTypeEnum'] = {

    /**
     * value: "ASSET"
     * @const
     */
    "ASSET": "ASSET",

    /**
     * value: "LIABILITY"
     * @const
     */
    "LIABILITY": "LIABILITY",

    /**
     * value: "EQUITY"
     * @const
     */
    "EQUITY": "EQUITY",

    /**
     * value: "INCOME"
     * @const
     */
    "INCOME": "INCOME",

    /**
     * value: "EXPENSE"
     * @const
     */
    "EXPENSE": "EXPENSE"
};



export default FinancialActivityData;

