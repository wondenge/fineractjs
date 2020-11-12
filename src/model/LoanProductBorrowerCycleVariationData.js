

import ApiClient from '../ApiClient';

/**
 * The LoanProductBorrowerCycleVariationData model module.
 * @module model/LoanProductBorrowerCycleVariationData
 * @version 1.0
 */
class LoanProductBorrowerCycleVariationData {
    /**
     * Constructs a new <code>LoanProductBorrowerCycleVariationData</code>.
     * @alias module:model/LoanProductBorrowerCycleVariationData
     */
    constructor() { 
        
        LoanProductBorrowerCycleVariationData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanProductBorrowerCycleVariationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanProductBorrowerCycleVariationData} obj Optional instance to populate.
     * @return {module:model/LoanProductBorrowerCycleVariationData} The populated <code>LoanProductBorrowerCycleVariationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanProductBorrowerCycleVariationData();

            if (data.hasOwnProperty('borrowerCycleNumber')) {
                obj['borrowerCycleNumber'] = ApiClient.convertToType(data['borrowerCycleNumber'], 'Number');
            }
            if (data.hasOwnProperty('paramType')) {
                obj['paramType'] = ApiClient.convertToType(data['paramType'], 'String');
            }
            if (data.hasOwnProperty('valueConditionType')) {
                obj['valueConditionType'] = ApiClient.convertToType(data['valueConditionType'], 'String');
            }
            if (data.hasOwnProperty('defaultValue')) {
                obj['defaultValue'] = ApiClient.convertToType(data['defaultValue'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} borrowerCycleNumber
 */
LoanProductBorrowerCycleVariationData.prototype['borrowerCycleNumber'] = undefined;

/**
 * @member {module:model/LoanProductBorrowerCycleVariationData.ParamTypeEnum} paramType
 */
LoanProductBorrowerCycleVariationData.prototype['paramType'] = undefined;

/**
 * @member {module:model/LoanProductBorrowerCycleVariationData.ValueConditionTypeEnum} valueConditionType
 */
LoanProductBorrowerCycleVariationData.prototype['valueConditionType'] = undefined;

/**
 * @member {Number} defaultValue
 */
LoanProductBorrowerCycleVariationData.prototype['defaultValue'] = undefined;





/**
 * Allowed values for the <code>paramType</code> property.
 * @enum {String}
 * @readonly
 */
LoanProductBorrowerCycleVariationData['ParamTypeEnum'] = {

    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID",

    /**
     * value: "PRINCIPAL"
     * @const
     */
    "PRINCIPAL": "PRINCIPAL",

    /**
     * value: "INTERESTRATE"
     * @const
     */
    "INTERESTRATE": "INTERESTRATE",

    /**
     * value: "REPAYMENT"
     * @const
     */
    "REPAYMENT": "REPAYMENT"
};


/**
 * Allowed values for the <code>valueConditionType</code> property.
 * @enum {String}
 * @readonly
 */
LoanProductBorrowerCycleVariationData['ValueConditionTypeEnum'] = {

    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID",

    /**
     * value: "EQUAL"
     * @const
     */
    "EQUAL": "EQUAL",

    /**
     * value: "GREATERTHAN"
     * @const
     */
    "GREATERTHAN": "GREATERTHAN"
};



export default LoanProductBorrowerCycleVariationData;

