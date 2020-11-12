

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsLiabilityType model module.
 * @module model/GetLoanProductsLiabilityType
 * @version 1.0
 */
class GetLoanProductsLiabilityType {
    /**
     * Constructs a new <code>GetLoanProductsLiabilityType</code>.
     * @alias module:model/GetLoanProductsLiabilityType
     */
    constructor() { 
        
        GetLoanProductsLiabilityType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsLiabilityType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsLiabilityType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsLiabilityType} The populated <code>GetLoanProductsLiabilityType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsLiabilityType();

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
GetLoanProductsLiabilityType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsLiabilityType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsLiabilityType.prototype['description'] = undefined;






export default GetLoanProductsLiabilityType;

