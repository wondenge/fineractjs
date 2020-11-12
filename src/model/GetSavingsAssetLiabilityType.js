

import ApiClient from '../ApiClient';

/**
 * The GetSavingsAssetLiabilityType model module.
 * @module model/GetSavingsAssetLiabilityType
 * @version 1.0
 */
class GetSavingsAssetLiabilityType {
    /**
     * Constructs a new <code>GetSavingsAssetLiabilityType</code>.
     * @alias module:model/GetSavingsAssetLiabilityType
     */
    constructor() { 
        
        GetSavingsAssetLiabilityType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsAssetLiabilityType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsAssetLiabilityType} obj Optional instance to populate.
     * @return {module:model/GetSavingsAssetLiabilityType} The populated <code>GetSavingsAssetLiabilityType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsAssetLiabilityType();

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
GetSavingsAssetLiabilityType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsAssetLiabilityType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsAssetLiabilityType.prototype['description'] = undefined;






export default GetSavingsAssetLiabilityType;

