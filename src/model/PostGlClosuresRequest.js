

import ApiClient from '../ApiClient';

/**
 * The PostGlClosuresRequest model module.
 * @module model/PostGlClosuresRequest
 * @version 1.0
 */
class PostGlClosuresRequest {
    /**
     * Constructs a new <code>PostGlClosuresRequest</code>.
     * PostGLCLosuresRequest
     * @alias module:model/PostGlClosuresRequest
     */
    constructor() { 
        
        PostGlClosuresRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostGlClosuresRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGlClosuresRequest} obj Optional instance to populate.
     * @return {module:model/PostGlClosuresRequest} The populated <code>PostGlClosuresRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostGlClosuresRequest();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('closingDate')) {
                obj['closingDate'] = ApiClient.convertToType(data['closingDate'], 'Date');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostGlClosuresRequest.prototype['officeId'] = undefined;

/**
 * @member {Date} closingDate
 */
PostGlClosuresRequest.prototype['closingDate'] = undefined;

/**
 * @member {String} comments
 */
PostGlClosuresRequest.prototype['comments'] = undefined;

/**
 * @member {String} locale
 */
PostGlClosuresRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostGlClosuresRequest.prototype['dateFormat'] = undefined;






export default PostGlClosuresRequest;

