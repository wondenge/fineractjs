

import ApiClient from '../ApiClient';

/**
 * The ContentDisposition model module.
 * @module model/ContentDisposition
 * @version 1.0
 */
class ContentDisposition {
    /**
     * Constructs a new <code>ContentDisposition</code>.
     * @alias module:model/ContentDisposition
     */
    constructor() { 
        
        ContentDisposition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentDisposition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentDisposition} obj Optional instance to populate.
     * @return {module:model/ContentDisposition} The populated <code>ContentDisposition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentDisposition();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('modificationDate')) {
                obj['modificationDate'] = ApiClient.convertToType(data['modificationDate'], 'Date');
            }
            if (data.hasOwnProperty('readDate')) {
                obj['readDate'] = ApiClient.convertToType(data['readDate'], 'Date');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
ContentDisposition.prototype['type'] = undefined;

/**
 * @member {Object.<String, String>} parameters
 */
ContentDisposition.prototype['parameters'] = undefined;

/**
 * @member {String} fileName
 */
ContentDisposition.prototype['fileName'] = undefined;

/**
 * @member {Date} creationDate
 */
ContentDisposition.prototype['creationDate'] = undefined;

/**
 * @member {Date} modificationDate
 */
ContentDisposition.prototype['modificationDate'] = undefined;

/**
 * @member {Date} readDate
 */
ContentDisposition.prototype['readDate'] = undefined;

/**
 * @member {Number} size
 */
ContentDisposition.prototype['size'] = undefined;






export default ContentDisposition;

