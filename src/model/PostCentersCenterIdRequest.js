

import ApiClient from '../ApiClient';

/**
 * The PostCentersCenterIdRequest model module.
 * @module model/PostCentersCenterIdRequest
 * @version 1.0
 */
class PostCentersCenterIdRequest {
    /**
     * Constructs a new <code>PostCentersCenterIdRequest</code>.
     * PostCentersCenterIdRequest
     * @alias module:model/PostCentersCenterIdRequest
     */
    constructor() { 
        
        PostCentersCenterIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostCentersCenterIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostCentersCenterIdRequest} obj Optional instance to populate.
     * @return {module:model/PostCentersCenterIdRequest} The populated <code>PostCentersCenterIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostCentersCenterIdRequest();

            if (data.hasOwnProperty('closureReasonId')) {
                obj['closureReasonId'] = ApiClient.convertToType(data['closureReasonId'], 'Number');
            }
            if (data.hasOwnProperty('closureDate')) {
                obj['closureDate'] = ApiClient.convertToType(data['closureDate'], 'String');
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
 * @member {Number} closureReasonId
 */
PostCentersCenterIdRequest.prototype['closureReasonId'] = undefined;

/**
 * @member {String} closureDate
 */
PostCentersCenterIdRequest.prototype['closureDate'] = undefined;

/**
 * @member {String} locale
 */
PostCentersCenterIdRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostCentersCenterIdRequest.prototype['dateFormat'] = undefined;






export default PostCentersCenterIdRequest;

