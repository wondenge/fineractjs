

import ApiClient from '../ApiClient';

/**
 * The PostOfficesRequest model module.
 * @module model/PostOfficesRequest
 * @version 1.0
 */
class PostOfficesRequest {
    /**
     * Constructs a new <code>PostOfficesRequest</code>.
     * PostOfficesRequest
     * @alias module:model/PostOfficesRequest
     */
    constructor() { 
        
        PostOfficesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostOfficesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostOfficesRequest} obj Optional instance to populate.
     * @return {module:model/PostOfficesRequest} The populated <code>PostOfficesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostOfficesRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('openingDate')) {
                obj['openingDate'] = ApiClient.convertToType(data['openingDate'], 'Date');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'Number');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostOfficesRequest.prototype['name'] = undefined;

/**
 * @member {String} dateFormat
 */
PostOfficesRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostOfficesRequest.prototype['locale'] = undefined;

/**
 * @member {Date} openingDate
 */
PostOfficesRequest.prototype['openingDate'] = undefined;

/**
 * @member {Number} parentId
 */
PostOfficesRequest.prototype['parentId'] = undefined;

/**
 * @member {String} externalId
 */
PostOfficesRequest.prototype['externalId'] = undefined;






export default PostOfficesRequest;

