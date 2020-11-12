

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsInterestCompoundingPeriodType model module.
 * @module model/GetSavingsProductsInterestCompoundingPeriodType
 * @version 1.0
 */
class GetSavingsProductsInterestCompoundingPeriodType {
    /**
     * Constructs a new <code>GetSavingsProductsInterestCompoundingPeriodType</code>.
     * @alias module:model/GetSavingsProductsInterestCompoundingPeriodType
     */
    constructor() { 
        
        GetSavingsProductsInterestCompoundingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsInterestCompoundingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsInterestCompoundingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsInterestCompoundingPeriodType} The populated <code>GetSavingsProductsInterestCompoundingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsInterestCompoundingPeriodType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsProductsInterestCompoundingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsProductsInterestCompoundingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsInterestCompoundingPeriodType.prototype['description'] = undefined;






export default GetSavingsProductsInterestCompoundingPeriodType;

