

import ApiClient from '../ApiClient';

/**
 * The Image model module.
 * @module model/Image
 * @version 1.0
 */
class Image {
    /**
     * Constructs a new <code>Image</code>.
     * @alias module:model/Image
     */
    constructor() { 
        
        Image.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Image} obj Optional instance to populate.
     * @return {module:model/Image} The populated <code>Image</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Image();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('storageType')) {
                obj['storageType'] = ApiClient.convertToType(data['storageType'], 'Number');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Image.prototype['id'] = undefined;

/**
 * @member {String} location
 */
Image.prototype['location'] = undefined;

/**
 * @member {Number} storageType
 */
Image.prototype['storageType'] = undefined;

/**
 * @member {Boolean} new
 */
Image.prototype['new'] = undefined;






export default Image;

