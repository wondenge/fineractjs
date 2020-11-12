

import ApiClient from '../ApiClient';

/**
 * The PostTellersRequest model module.
 * @module model/PostTellersRequest
 * @version 1.0
 */
class PostTellersRequest {
    /**
     * Constructs a new <code>PostTellersRequest</code>.
     * PostTellersRequest
     * @alias module:model/PostTellersRequest
     */
    constructor() { 
        
        PostTellersRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTellersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTellersRequest} obj Optional instance to populate.
     * @return {module:model/PostTellersRequest} The populated <code>PostTellersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTellersRequest();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostTellersRequest.prototype['officeId'] = undefined;

/**
 * @member {String} name
 */
PostTellersRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PostTellersRequest.prototype['description'] = undefined;

/**
 * @member {module:model/PostTellersRequest.StatusEnum} status
 */
PostTellersRequest.prototype['status'] = undefined;

/**
 * @member {String} locale
 */
PostTellersRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostTellersRequest.prototype['dateFormat'] = undefined;

/**
 * @member {Date} startDate
 */
PostTellersRequest.prototype['startDate'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
PostTellersRequest['StatusEnum'] = {

    /**
     * value: "INVALID"
     * @const
     */
    "INVALID": "INVALID",

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",

    /**
     * value: "INACTIVE"
     * @const
     */
    "INACTIVE": "INACTIVE",

    /**
     * value: "CLOSED"
     * @const
     */
    "CLOSED": "CLOSED"
};



export default PostTellersRequest;

