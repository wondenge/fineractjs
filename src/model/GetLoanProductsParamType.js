

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsParamType model module.
 * @module model/GetLoanProductsParamType
 * @version 1.0
 */
class GetLoanProductsParamType {
    /**
     * Constructs a new <code>GetLoanProductsParamType</code>.
     * @alias module:model/GetLoanProductsParamType
     */
    constructor() { 
        
        GetLoanProductsParamType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsParamType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsParamType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsParamType} The populated <code>GetLoanProductsParamType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsParamType();

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
GetLoanProductsParamType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsParamType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsParamType.prototype['description'] = undefined;






export default GetLoanProductsParamType;

