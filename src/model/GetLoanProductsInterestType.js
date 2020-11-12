

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsInterestType model module.
 * @module model/GetLoanProductsInterestType
 * @version 1.0
 */
class GetLoanProductsInterestType {
    /**
     * Constructs a new <code>GetLoanProductsInterestType</code>.
     * @alias module:model/GetLoanProductsInterestType
     */
    constructor() { 
        
        GetLoanProductsInterestType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsInterestType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsInterestType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsInterestType} The populated <code>GetLoanProductsInterestType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsInterestType();

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
GetLoanProductsInterestType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsInterestType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsInterestType.prototype['description'] = undefined;






export default GetLoanProductsInterestType;

