

import ApiClient from '../ApiClient';

/**
 * The GetProductsLiabilityType model module.
 * @module model/GetProductsLiabilityType
 * @version 1.0
 */
class GetProductsLiabilityType {
    /**
     * Constructs a new <code>GetProductsLiabilityType</code>.
     * @alias module:model/GetProductsLiabilityType
     */
    constructor() { 
        
        GetProductsLiabilityType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductsLiabilityType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductsLiabilityType} obj Optional instance to populate.
     * @return {module:model/GetProductsLiabilityType} The populated <code>GetProductsLiabilityType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductsLiabilityType();

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
GetProductsLiabilityType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetProductsLiabilityType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetProductsLiabilityType.prototype['description'] = undefined;






export default GetProductsLiabilityType;

