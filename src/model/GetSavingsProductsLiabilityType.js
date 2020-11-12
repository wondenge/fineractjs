

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsLiabilityType model module.
 * @module model/GetSavingsProductsLiabilityType
 * @version 1.0
 */
class GetSavingsProductsLiabilityType {
    /**
     * Constructs a new <code>GetSavingsProductsLiabilityType</code>.
     * @alias module:model/GetSavingsProductsLiabilityType
     */
    constructor() { 
        
        GetSavingsProductsLiabilityType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsLiabilityType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsLiabilityType} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsLiabilityType} The populated <code>GetSavingsProductsLiabilityType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsLiabilityType();

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
GetSavingsProductsLiabilityType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsProductsLiabilityType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsLiabilityType.prototype['description'] = undefined;






export default GetSavingsProductsLiabilityType;

