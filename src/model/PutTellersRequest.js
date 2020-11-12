

import ApiClient from '../ApiClient';

/**
 * The PutTellersRequest model module.
 * @module model/PutTellersRequest
 * @version 1.0
 */
class PutTellersRequest {
    /**
     * Constructs a new <code>PutTellersRequest</code>.
     * PutTellersRequest
     * @alias module:model/PutTellersRequest
     */
    constructor() { 
        
        PutTellersRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTellersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTellersRequest} obj Optional instance to populate.
     * @return {module:model/PutTellersRequest} The populated <code>PutTellersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTellersRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
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
 * @member {String} name
 */
PutTellersRequest.prototype['name'] = undefined;

/**
 * @member {Number} officeId
 */
PutTellersRequest.prototype['officeId'] = undefined;

/**
 * @member {String} description
 */
PutTellersRequest.prototype['description'] = undefined;

/**
 * @member {module:model/PutTellersRequest.StatusEnum} status
 */
PutTellersRequest.prototype['status'] = undefined;

/**
 * @member {Date} endDate
 */
PutTellersRequest.prototype['endDate'] = undefined;

/**
 * @member {Date} startDate
 */
PutTellersRequest.prototype['startDate'] = undefined;

/**
 * @member {String} locale
 */
PutTellersRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PutTellersRequest.prototype['dateFormat'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
PutTellersRequest['StatusEnum'] = {

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



export default PutTellersRequest;

