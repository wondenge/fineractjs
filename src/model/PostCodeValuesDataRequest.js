

import ApiClient from '../ApiClient';

/**
 * The PostCodeValuesDataRequest model module.
 * @module model/PostCodeValuesDataRequest
 * @version 1.0
 */
class PostCodeValuesDataRequest {
    /**
     * Constructs a new <code>PostCodeValuesDataRequest</code>.
     * PostCodeValuesDataRequest
     * @alias module:model/PostCodeValuesDataRequest
     */
    constructor() { 
        
        PostCodeValuesDataRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostCodeValuesDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostCodeValuesDataRequest} obj Optional instance to populate.
     * @return {module:model/PostCodeValuesDataRequest} The populated <code>PostCodeValuesDataRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostCodeValuesDataRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostCodeValuesDataRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PostCodeValuesDataRequest.prototype['description'] = undefined;

/**
 * @member {Number} position
 */
PostCodeValuesDataRequest.prototype['position'] = undefined;






export default PostCodeValuesDataRequest;

