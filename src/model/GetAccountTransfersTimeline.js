

import ApiClient from '../ApiClient';

/**
 * The GetAccountTransfersTimeline model module.
 * @module model/GetAccountTransfersTimeline
 * @version 1.0
 */
class GetAccountTransfersTimeline {
    /**
     * Constructs a new <code>GetAccountTransfersTimeline</code>.
     * @alias module:model/GetAccountTransfersTimeline
     */
    constructor() { 
        
        GetAccountTransfersTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountTransfersTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountTransfersTimeline} obj Optional instance to populate.
     * @return {module:model/GetAccountTransfersTimeline} The populated <code>GetAccountTransfersTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountTransfersTimeline();

            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'Date');
            }
            if (data.hasOwnProperty('submittedByUsername')) {
                obj['submittedByUsername'] = ApiClient.convertToType(data['submittedByUsername'], 'String');
            }
            if (data.hasOwnProperty('submittedByFirstname')) {
                obj['submittedByFirstname'] = ApiClient.convertToType(data['submittedByFirstname'], 'String');
            }
            if (data.hasOwnProperty('submittedByLastname')) {
                obj['submittedByLastname'] = ApiClient.convertToType(data['submittedByLastname'], 'String');
            }
            if (data.hasOwnProperty('activatedOnDate')) {
                obj['activatedOnDate'] = ApiClient.convertToType(data['activatedOnDate'], 'Date');
            }
            if (data.hasOwnProperty('activatedByUsername')) {
                obj['activatedByUsername'] = ApiClient.convertToType(data['activatedByUsername'], 'String');
            }
            if (data.hasOwnProperty('activatedByFirstname')) {
                obj['activatedByFirstname'] = ApiClient.convertToType(data['activatedByFirstname'], 'String');
            }
            if (data.hasOwnProperty('activatedByLastname')) {
                obj['activatedByLastname'] = ApiClient.convertToType(data['activatedByLastname'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} submittedOnDate
 */
GetAccountTransfersTimeline.prototype['submittedOnDate'] = undefined;

/**
 * @member {String} submittedByUsername
 */
GetAccountTransfersTimeline.prototype['submittedByUsername'] = undefined;

/**
 * @member {String} submittedByFirstname
 */
GetAccountTransfersTimeline.prototype['submittedByFirstname'] = undefined;

/**
 * @member {String} submittedByLastname
 */
GetAccountTransfersTimeline.prototype['submittedByLastname'] = undefined;

/**
 * @member {Date} activatedOnDate
 */
GetAccountTransfersTimeline.prototype['activatedOnDate'] = undefined;

/**
 * @member {String} activatedByUsername
 */
GetAccountTransfersTimeline.prototype['activatedByUsername'] = undefined;

/**
 * @member {String} activatedByFirstname
 */
GetAccountTransfersTimeline.prototype['activatedByFirstname'] = undefined;

/**
 * @member {String} activatedByLastname
 */
GetAccountTransfersTimeline.prototype['activatedByLastname'] = undefined;






export default GetAccountTransfersTimeline;

