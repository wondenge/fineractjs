

import ApiClient from '../ApiClient';

/**
 * The PostBodyRequestSwagger model module.
 * @module model/PostBodyRequestSwagger
 * @version 1.0
 */
class PostBodyRequestSwagger {
    /**
     * Constructs a new <code>PostBodyRequestSwagger</code>.
     * @alias module:model/PostBodyRequestSwagger
     */
    constructor() { 
        
        PostBodyRequestSwagger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostBodyRequestSwagger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostBodyRequestSwagger} obj Optional instance to populate.
     * @return {module:model/PostBodyRequestSwagger} The populated <code>PostBodyRequestSwagger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostBodyRequestSwagger();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('activationDate')) {
                obj['activationDate'] = ApiClient.convertToType(data['activationDate'], 'String');
            }
            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostBodyRequestSwagger.prototype['officeId'] = undefined;

/**
 * @member {String} firstname
 */
PostBodyRequestSwagger.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
PostBodyRequestSwagger.prototype['lastname'] = undefined;

/**
 * @member {String} externalId
 */
PostBodyRequestSwagger.prototype['externalId'] = undefined;

/**
 * @member {String} dateFormat
 */
PostBodyRequestSwagger.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostBodyRequestSwagger.prototype['locale'] = undefined;

/**
 * @member {Boolean} active
 */
PostBodyRequestSwagger.prototype['active'] = undefined;

/**
 * @member {String} activationDate
 */
PostBodyRequestSwagger.prototype['activationDate'] = undefined;

/**
 * @member {String} submittedOnDate
 */
PostBodyRequestSwagger.prototype['submittedOnDate'] = undefined;






export default PostBodyRequestSwagger;

