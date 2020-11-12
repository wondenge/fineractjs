

import ApiClient from '../ApiClient';

/**
 * The GetAssetType model module.
 * @module model/GetAssetType
 * @version 1.0
 */
class GetAssetType {
    /**
     * Constructs a new <code>GetAssetType</code>.
     * @alias module:model/GetAssetType
     */
    constructor() { 
        
        GetAssetType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAssetType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAssetType} obj Optional instance to populate.
     * @return {module:model/GetAssetType} The populated <code>GetAssetType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAssetType();

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
GetAssetType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetAssetType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetAssetType.prototype['description'] = undefined;






export default GetAssetType;

