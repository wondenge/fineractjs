

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsValueConditionType model module.
 * @module model/GetLoanProductsValueConditionType
 * @version 1.0
 */
class GetLoanProductsValueConditionType {
    /**
     * Constructs a new <code>GetLoanProductsValueConditionType</code>.
     * @alias module:model/GetLoanProductsValueConditionType
     */
    constructor() { 
        
        GetLoanProductsValueConditionType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsValueConditionType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsValueConditionType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsValueConditionType} The populated <code>GetLoanProductsValueConditionType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsValueConditionType();

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
GetLoanProductsValueConditionType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsValueConditionType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsValueConditionType.prototype['description'] = undefined;






export default GetLoanProductsValueConditionType;

